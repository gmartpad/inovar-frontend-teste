import { Box, Button, FormControl, Typography } from '@mui/material'
import { styled } from '@mui/system'
import customTheme from '@src/theme'
import { TailSpin } from 'react-loader-spinner'

export const ProfileIconButton = styled(Button)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: 24,
})

// ----

export const NotificationsTypography = styled(Typography)({
  textAlign: 'center',
  fontSize: 12,
  padding: 1,
  color: '#fff',
})

// ----

export const NotificationsBox = styled(Box)({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 16,
  maxWidth: 30,
  height: 16,
  left: 'calc(0px)',
  top: 'calc(20px)',
  backgroundColor: customTheme.palette.primary.main,
  borderRadius: 4,
})

// ----

export const NotificationsCircle = styled(Box)({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 16,
  maxWidth: 32,
  height: 16,
  right: 8,
  backgroundColor: customTheme.palette.primary.main,
  borderRadius: 8,
  padding: 1,
})

// ----

export const StyledFormContainer = styled(Box)({
  height: 'fit-content',
  minWidth: 200,
  padding: 10,
})

// ----

export const StyledForm = styled(FormControl)({
  width: '100%',
})

// ----
