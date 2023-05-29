import React from 'react'
import { Box } from '@mui/material'
import { StyledAddIcon, StyledButton, VerticalLine } from './styled'
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
        <Box display="flex" alignItems="center">
          <StyledAddIcon data-testid="add-post-button-add-icon" />
          <VerticalLine data-testid="add-post-button-v-line" />
        </Box>
      }
    >
      Add Post
    </StyledButton>
  )
}

export default AddPostButton
