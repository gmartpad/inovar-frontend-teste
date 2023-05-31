import { ReactNode } from 'react'
import { StyledContainer } from './styled'

interface PageContainerProps {
  children: ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default PageContainer
