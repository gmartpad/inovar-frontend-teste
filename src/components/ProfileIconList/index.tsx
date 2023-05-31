import AddPostButton from '@components/AddPostButton'
import {
  NotificationsCircle,
  NotificationsTypography,
} from '@components/ProfileIcon/styled'
import { Box, MenuItem, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import Case from 'case'
import { useRouter } from 'next/router'
import { StyledAddPostButton } from './styled'

interface ProfileIconListProps {
  paths: string[]
  notificationQty: number
}

const ProfileIconList: React.FC<ProfileIconListProps> = ({
  paths,
  notificationQty,
}) => {
  const router = useRouter()
  const { asPath } = router

  const isMobile = useMediaQuery('(max-width:780px)')

  return (
    <>
      {paths.map((item) => {
        if (item === '/add-post') {
          if (isMobile) {
            return (
              <Box key={item}>
                <StyledAddPostButton data-testid="add-post-list-mobile" />
                <Box marginBottom={2} />
              </Box>
            )
          }
          return null
        }

        return (
          <Link key={item} style={{ textDecoration: 'none' }} href={item}>
            <MenuItem key={item} value={item}>
              <Typography fontWeight={item === asPath ? 'bold' : 'regular'}>
                {item === '/' ? 'Home' : Case.capital(item.replace('/', ''))}
              </Typography>
              {item === '/notifications' && (
                <NotificationsCircle>
                  <NotificationsTypography>
                    {notificationQty > 99 ? '99+' : notificationQty}
                  </NotificationsTypography>
                </NotificationsCircle>
              )}
            </MenuItem>
          </Link>
        )
      })}
    </>
  )
}

export default ProfileIconList
