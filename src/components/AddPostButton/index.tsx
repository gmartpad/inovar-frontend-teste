import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Box } from '@mui/material'
import { StyledButton, VerticalLine } from './styled'

interface AddPostButtonProps {
  onClick: () => void
}

const AddPostButton: React.FC<AddPostButtonProps> = ({ onClick }) => {
  return (
    <StyledButton
      color="primary"
      variant="contained"
      onClick={onClick}
      startIcon={
        <Box display="flex" alignItems="center">
          <AddIcon />
          <VerticalLine />
        </Box>
      }
    >
      Add Post
    </StyledButton>
  )
}

export default AddPostButton
