import { ReactNode } from 'react'
import { StyledAppContainer } from './styled'

interface AppContainerProps {
  children: ReactNode
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <StyledAppContainer>{children}</StyledAppContainer>
}

export default AppContainer
