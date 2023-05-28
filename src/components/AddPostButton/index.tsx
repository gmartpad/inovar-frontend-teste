import React from 'react'
import { Box } from '@mui/material'
import { StyledAddIcon, StyledButton, VerticalLine } from './styled'

interface AddPostButtonProps {
  onClick: () => void
}

const AddPostButton: React.FC<AddPostButtonProps> = ({ onClick }) => {
  return (
    <StyledButton
      data-testid="add-post-button"
      color="primary"
      variant="contained"
      onClick={onClick}
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
