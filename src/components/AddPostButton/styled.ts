import { Button, Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { styled } from '@mui/system'

export const StyledButton = styled(Button)({
  paddingTop: 0,
  paddingBottom: 0,
  height: 'fit-content',
  textTransform: 'none',
})

// ----

export const StyledAddIcon = styled(AddIcon)({
  marginRight: 8,
})

// ----

export const VerticalLine = styled(Box)({
  marginLeft: 1,
  marginRight: 'auto',
  borderLeft: '1px solid',
  borderColor: 'rgba(0,0,0,0.1)',
  height: '44px',
})

// ----

export const StyledTypography = styled(Typography)({
  width: '100%',
  textAlign: 'center',
})
