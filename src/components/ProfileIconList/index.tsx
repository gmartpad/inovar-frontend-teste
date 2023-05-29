import AddPostButton from '@components/AddPostButton'
import {
  NotificationsCircle,
  NotificationsTypography,
} from '@components/ProfileIcon/styled'
import { Box, Link, MenuItem, useMediaQuery } from '@mui/material'
import Case from 'case'

interface ProfileIconListProps {
  paths: string[]
  notificationQty: number
}

const ProfileIconList: React.FC<ProfileIconListProps> = ({
  paths,
  notificationQty,
}) => {
  const isMobile = useMediaQuery('(max-width:650px)')

  return (
    <>
      {paths.map((item) => {
        if (item === '/add-post') {
          if (isMobile) {
            return (
              <Box key={item}>
                <AddPostButton data-testid="add-post-list-mobile" />
                <Box marginBottom={2} />
              </Box>
            )
          }
          return null
        }

        return (
          <Link key={item} style={{ textDecoration: 'none' }} href={item}>
            <MenuItem key={item} value={item}>
              {item === '/' ? 'Home' : Case.capital(item.replace('/', ''))}
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
