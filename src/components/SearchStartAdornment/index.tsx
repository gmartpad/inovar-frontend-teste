import React from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface SearchStartAdornmentProps {
  isDebouncing: boolean
  onClick: () => void
}

const SearchStartAdornment: React.FC<SearchStartAdornmentProps> = ({
  isDebouncing,
  onClick,
}) => {
  return (
    <InputAdornment position="start">
      <IconButton
        data-testid="SearchButton"
        disabled={isDebouncing}
        onClick={onClick}
      >
        <SearchIcon />
      </IconButton>
    </InputAdornment>
  )
}

export default SearchStartAdornment
