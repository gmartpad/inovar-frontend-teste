import { Typography, styled } from '@mui/material'
import customTheme from '@src/theme'

export const StyledAnchorTypography = styled(Typography)({
  color: customTheme.palette.primary.main,
  fontSize: 14,
  textAlign: 'center',
  verticalAlign: 'center',
  cursor: 'pointer',
  marginLeft: 8,
  '&:hover': {
    textDecoration: 'underline',
  },
})
