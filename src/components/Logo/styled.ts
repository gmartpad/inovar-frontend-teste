import styled from '@emotion/styled'
import customTheme from '@src/theme'

interface LogoProps {
  backgroundColor: string
}

interface LogoInnerProps {
  textColor: string
}

export const StyledLogo = styled.div<LogoProps>`
  position: relative;
  width: 40px;
  height: 23px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || customTheme?.palette?.primary?.main};
  margin: 11.5px 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: 11.5px solid
      ${({ backgroundColor }) =>
        backgroundColor || customTheme?.palette?.primary?.main};
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 11.5px solid
      ${({ backgroundColor }) =>
        backgroundColor || customTheme?.palette?.primary?.main};
  }
`

export const StyledLogoInner = styled.div<LogoInnerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ textColor }) => textColor || '#FFF'};
  text-align: center;
  width: 100%;
`
