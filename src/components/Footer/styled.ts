import { Box, Typography, styled, Link as MUILink } from '@mui/material'
import Image from 'mui-image'
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

// ----

export const StyledFooterBox = styled(Box)(
  ({ ismobile }: { ismobile: boolean }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: ismobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: ismobile ? 'center' : 'inherit',
    marginTop: 12,
    marginBottom: 12,
  }),
)

// ----

export const StyledLogoAndTitleBox = styled(Box)(
  ({ ismobile }: { ismobile: boolean }) => ({
    display: 'flex',
    marginBottom: ismobile ? 20 : 0,
  }),
)

// ----

export const StyledTitleBox = styled(Box)({
  marginLeft: 12,
})

// ----

export const StyledTitleTypography = styled(Typography)({
  fontWeight: 'bold',
  fontSize: 14,
})

// ----

export const StyledGrayTypography = styled(Typography)({
  fontSize: 12,
  color: '#ccc',
})

export const StyledLinksAndCopyrightBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

// ----

export const StyledLinksBox = styled(Box)(
  ({ issmallermobile }: { issmallermobile: boolean }) => ({
    display: 'flex',
    flexDirection: issmallermobile ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
)

// ----

export const StyledSocialMediaBox = styled(Box)({
  display: 'flex',
})

// ----

export const StyledMUILink = styled(MUILink)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 4,
  marginRight: 4,
})

// ----

export const StyledSocialMediaTypography = styled(Typography)({
  marginLeft: 6,
})

// ----

export const StyledCopyrightBox = styled(Box)(
  ({ ismobile }: { ismobile: boolean }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: ismobile ? 'center' : 'right',
  }),
)

// ----

export const StyledImage = styled(Image)({
  borderRadius: 2,
  cursor: 'pointer',
})
