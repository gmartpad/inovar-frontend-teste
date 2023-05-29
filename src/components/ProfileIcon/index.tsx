import { Box, MenuItem, Popover } from '@mui/material'
import Case from 'case'
import Image from 'mui-image'
import {
  NotificationsBox,
  NotificationsCircle,
  NotificationsTypography,
  ProfileIconButton,
  StyledForm,
  StyledFormContainer,
} from './styled'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LoadingSpinner from '@components/LoadingSpinner'
import customTheme from '@src/theme'

const ProfileIcon: React.FC = () => {
  const router = useRouter()
  const { asPath } = router

  const [paths, setPaths] = useState([
    '/',
    '/about',
    '/contact',
    '/notifications',
    '/profile',
    '/sign-in',
  ])

  const [notificationQty, setNotificationQty] = useState<number>(4)
  const [imageSrc, setImageSrc] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const anchorEl = useRef<null | HTMLElement>(null)

  const handlePaths = useCallback(() => {
    const currentPathIsPresent = paths.includes(asPath)
    if (currentPathIsPresent) {
      const newPaths = paths.filter((item) => item !== asPath)
      setPaths(newPaths)
    }
  }, [])

  useEffect(() => {
    setImageSrc('http://github.com/gmartpad.png')
    handlePaths()
  }, [])

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      anchorEl.current = event.currentTarget
      setOpen(true)
    },
    [anchorEl, setOpen],
  )

  const handleClose = useCallback(() => {
    setOpen(false)
    anchorEl.current = null
  }, [setOpen, anchorEl])

  return (
    <>
      <ProfileIconButton
        data-testid="profile-icon-button"
        onClick={handleClick}
      >
        <Image
          key="profile-icon"
          src={imageSrc}
          alt={'Perfil de Usuario'}
          width={44}
          height={44}
          style={{
            borderRadius: 4,
          }}
          showLoading={<LoadingSpinner />}
          onError={null}
        />
        <NotificationsBox>
          <NotificationsTypography>
            {notificationQty > 99 ? '99+' : notificationQty}
          </NotificationsTypography>
        </NotificationsBox>
      </ProfileIconButton>
      {open && (
        <Popover
          data-testid="profile-icon-popover"
          open={open}
          anchorEl={anchorEl.current}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <StyledFormContainer>
            <StyledForm>
              {paths.map((item) => (
                <MenuItem key={item} value={item}>
                  <Link href={item}>
                    {item === '/'
                      ? 'Home'
                      : Case.capital(item.replace('/', ''))}
                  </Link>
                  {item === '/notifications' && (
                    <NotificationsCircle>
                      <NotificationsTypography>
                        {notificationQty > 99 ? '99+' : notificationQty}
                      </NotificationsTypography>
                    </NotificationsCircle>
                  )}
                </MenuItem>
              ))}
            </StyledForm>
          </StyledFormContainer>
        </Popover>
      )}
    </>
  )
}

export default ProfileIcon
