import { Popover, useMediaQuery } from '@mui/material'
import Image from 'mui-image'
import {
  NotificationsBox,
  NotificationsTypography,
  ProfileIconButton,
  StyledForm,
  StyledFormContainer,
} from './styled'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingSpinner from '@components/LoadingSpinner'
import ProfileIconList from '@components/ProfileIconList'

const ProfileIcon: React.FC = () => {
  const router = useRouter()
  const { asPath } = router

  const isMobile = useMediaQuery('(max-width:650px)')

  const [paths, setPaths] = useState([
    '/',
    '/add-post',
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
  }, [paths, asPath])

  useEffect(() => {
    setImageSrc('http://github.com/gmartpad.png')
    handlePaths()
  }, [handlePaths])

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
        ismobile={String(isMobile)}
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
              <ProfileIconList
                paths={paths}
                notificationQty={notificationQty}
              />
            </StyledForm>
          </StyledFormContainer>
        </Popover>
      )}
    </>
  )
}

export default ProfileIcon
