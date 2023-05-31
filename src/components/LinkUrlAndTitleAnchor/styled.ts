import { Typography, styled } from '@mui/material'

export const StyledUrlTypography = styled(Typography)({
  color: '#bbb',
  textTransform: 'uppercase',
  fontSize: 14,
  cursor: 'pointer',
})

// ----

export const StyledTitleTypography = styled(Typography)({
  fontSize: 24,
  transition: '.3s all ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
})
