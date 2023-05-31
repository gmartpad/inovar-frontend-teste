import AutorenewIcon from '@mui/icons-material/Autorenew'
import { Button, Typography, styled } from '@mui/material'

export const StyledButton = styled(Button)({
  width: '100%',
  paddingTop: 20,
  paddingBottom: 20,
  backgroundColor: '#f4f4f1',
  '&:hover': {
    backgroundColor: '#f0f0e7',
  },
})

// ----

export const StyledTypography = styled(Typography)({
  textTransform: 'none',
  fontSize: 18,
})

// ----

export const StyledAutorenewIcon = styled(AutorenewIcon)({
  transform: 'rotate(90deg)',
})
