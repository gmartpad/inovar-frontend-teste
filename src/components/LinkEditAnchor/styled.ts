import { styled } from '@mui/system'
import { Box, Typography } from '@mui/material'
import customTheme from '@src/theme'

// ----

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

// ----

export const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 8,
})
