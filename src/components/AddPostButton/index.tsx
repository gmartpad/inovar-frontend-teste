import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

interface AddPostButtonProps {
  onClick: () => void
}

const AddPostButton: React.FC<AddPostButtonProps> = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      startIcon={<AddIcon />}
    >
      Add Post
    </Button>
  )
}

export default AddPostButton
