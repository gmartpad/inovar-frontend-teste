import { ReactNode } from 'react'
import { StyledContainer } from './styled'

interface ComponentContainerProps {
  children: ReactNode
}

const ComponentContainer: React.FC<ComponentContainerProps> = ({
  children,
}) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default ComponentContainer
