import { styled } from '@mui/system'
import { Box, Divider, IconButton, Typography } from '@mui/material'

// ----

export const StyledTypography = styled(Typography)({
  fontSize: 24,
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

// ----

export const StyledLabelTypography = styled(Typography)({
  color: '#fff',
  fontSize: 14,
  textAlign: 'center',
  verticalAlign: 'center',
})

// ----

export const StyledTimeAgoTypography = styled(Typography)({
  color: '#bbb',
  fontSize: 12,
  marginLeft: 8,
})

// ----

export const StyledSecondaryInfoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

// ----

export const StyledLabelBox = styled(Box)(
  ({ ismobile }: { ismobile: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    paddingTop: 2,
    paddingRight: 8,
    paddingBottom: 2,
    paddingLeft: 8,
    marginTop: ismobile ? 4 : 0,
    marginBottom: ismobile ? 8 : 0,
  }),
)

// ----

export const StyledOtherInfoBox = styled(Box)(
  ({ ismobile }: { ismobile: boolean }) => ({
    flexDirection: ismobile ? 'column' : 'row',
    display: 'flex',
  }),
)

// ----

export const StyledUrlAndTitleBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

// ----

export const StyledLinkInfoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

// ----

export const StyledUpvoteTypography = styled(Typography)({
  fontSize: 18,
  fontWeight: 'bold',
})

// ----

export const StyledUpvoteTypographyBox = styled(Box)({
  width: '100%',
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid #eee',
})

// ----

export const StyledArrowIconButton = styled(IconButton)({
  borderBottom: '1px solid #eee',
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
})

// ----

export const StyledUpvoteBox = styled(Box)({
  maxWidth: 44,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '2px solid #eee',
  borderRadius: 4,
  marginRight: 20,
})

// ----

export const StyledLinkItemBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 50,
})

// ----

export const StyledNoResultsBox = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  marginBottom: 40,
})

// ----

export const StyledNoResultsTypography = styled(Typography)({
  textAlign: 'center',
  paddingLeft: 20,
  paddingRight: 20,
})

// ----

export const StyledLoadingSearchBox = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  marginBottom: 40,
})

// ----

export const StyledDivider = styled(Divider)({
  marginLeft: 10,
  marginRight: 10,
})
