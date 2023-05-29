import React from 'react'
import { Box } from '@mui/material'
import {
  StyledAddIcon,
  StyledButton,
  StyledTypography,
  VerticalLine,
} from './styled'
import { useRouter } from 'next/router'

const AddPostButton: React.FC = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/add-post')
  }

  return (
    <StyledButton
      data-testid="add-post-button"
      color="primary"
      variant="contained"
      onClick={handleClick}
      startIcon={
        <Box maxWidth={35} display="flex" alignItems="center">
          <StyledAddIcon data-testid="add-post-button-add-icon" />
          <VerticalLine data-testid="add-post-button-v-line" />
        </Box>
      }
    >
      <StyledTypography>Add Post</StyledTypography>
    </StyledButton>
  )
}

export default AddPostButton
