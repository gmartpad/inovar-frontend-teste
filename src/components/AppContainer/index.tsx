import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface AppContainerProps {
  children: ReactNode
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <Box
      width="100%"
      height="100vh"
      style={{
        backgroundColor: '#fff',
      }}
    >
      {children}
    </Box>
  )
}

export default AppContainer
