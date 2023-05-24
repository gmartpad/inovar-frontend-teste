import { Button, Box } from '@mui/material'
import { styled } from '@mui/system'

export const StyledButton = styled(Button)({
  paddingTop: 0,
  paddingBottom: 0,
  height: 'fit-content',
  textTransform: 'none',
})

export const VerticalLine = styled(Box)({
  marginLeft: 1,
  marginRight: 1,
  borderLeft: '1px solid',
  borderColor: 'rgba(0,0,0,0.1)',
  height: '44px',
})
