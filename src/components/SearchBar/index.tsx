import React, { useState, useEffect, useRef } from 'react'
import { TextField } from '@mui/material'
import SearchStartAdornment from '@components/SearchStartAdornment'

interface Props {
  handleSearch: (value: string) => void
}

const SearchBar: React.FC<Props> = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false)
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current)
    }
    if (searchValue !== '') {
      setIsDebouncing(true)
      debounceTimeout.current = setTimeout(() => {
        handleSearch(searchValue)
        setIsDebouncing(false)
      }, 1500)
    }
  }, [searchValue])

  return (
    <TextField
      label="Search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      InputProps={{
        startAdornment: (
          <SearchStartAdornment
            isDebouncing={isDebouncing}
            onClick={() => handleSearch(searchValue)}
          />
        ),
      }}
    />
  )
}

export default SearchBar
