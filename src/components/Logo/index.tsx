import React, { CSSProperties } from 'react'
import Link from 'next/link'
import { StyledLogo, StyledLogoInner } from './styled'

interface LogoProps {
  style?: CSSProperties
  text: string
}

const Logo: React.FC<LogoProps> = ({ style, text }) => {
  const { backgroundColor, color } = style || {}

  return (
    <Link href="/" passHref>
      <StyledLogo data-testid="logo" backgroundColor={backgroundColor} as="a">
        <StyledLogoInner data-testid="logo-text" textColor={color}>
          {text}
        </StyledLogoInner>
      </StyledLogo>
    </Link>
  )
}

export default Logo
