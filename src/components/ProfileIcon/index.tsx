import { Popover, useMediaQuery } from '@mui/material'
import {
  NotificationsBox,
  NotificationsTypography,
  ProfileIconButton,
  StyledForm,
  StyledFormContainer,
} from './styled'
import { useCallback, useEffect, useRef, useState } from 'react'
import ProfileIconList from '@components/ProfileIconList'
import ProfileImage from '@components/ProfileImage'

const ProfileIcon: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:650px)')

  const paths = [
    '/add-post',
    '/',
    '/about',
    '/contact',
    '/notifications',
    '/profile',
    '/sign-in',
  ]

  const [notificationQty, setNotificationQty] = useState<number>(4)
  const [imageSrc, setImageSrc] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const anchorEl = useRef<null | HTMLElement>(null)

  useEffect(() => {
    setImageSrc('http://github.com/gmartpad.png')
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
        ismobile={String(isMobile)}
        onClick={handleClick}
      >
        <ProfileImage
          imageSrc={imageSrc}
          width={44}
          height={44}
          borderRadius={4}
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
