import { Button, Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { styled as MUIStyled } from '@mui/system'
import styled from '@emotion/styled'

export const StyledButton = MUIStyled(Button)({
  paddingTop: 0,
  paddingBottom: 0,
  height: 'fit-content',
  textTransform: 'none',
})

// ----

export const StyledAddIcon = MUIStyled(AddIcon)({
  marginRight: 8,
})

// ----

export const VerticalLine = MUIStyled(Box)({
  marginLeft: 1,
  marginRight: 'auto',
  borderLeft: '1px solid',
  borderColor: 'rgba(0,0,0,0.1)',
  height: '44px',
})

// ----

export const StyledTypography = styled.p`
  color: #fff;
  font-weight: bold;
  text-align: center;
  width: 100%;
`
