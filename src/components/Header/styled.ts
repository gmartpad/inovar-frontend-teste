import { Box, styled } from '@mui/material'

export const StyledHeaderBox = styled(Box)({
  backgroundColor: '#fff',
  width: '100%',
  borderBottom: '1px solid #ccc',
  paddingTop: 3,
  paddingBottom: 3,
  position: 'fixed',
  marginBottom: 60,
  zIndex: 99,
})

// ----

export const StyledLeftSectionBox = styled(Box)({
  display: 'flex',
  width: 'inherit',
  maxWidth: 500,
})

// ----

export const StyledRightSectionBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})
