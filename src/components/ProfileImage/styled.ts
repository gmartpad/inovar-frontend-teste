import { styled } from '@mui/material'
import Image from 'mui-image'

export const StyledImage = styled(Image)(
  ({ borderRadius }: { borderRadius: number }) => ({
    borderRadius: borderRadius,
    cursor: 'pointer',
  }),
)
