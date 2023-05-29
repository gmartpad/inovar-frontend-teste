import React, { useState, useEffect, useRef, useCallback } from 'react'
import SearchStartAdornment from '@components/SearchStartAdornment'
import { StyledTextField } from './styled'

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
  }, [searchValue, handleSearch])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current)
        }
        console.log(`searchValue: ${searchValue}`)
        handleSearch(searchValue)
        setIsDebouncing(false)
      }
    },
    [debounceTimeout, handleSearch, setIsDebouncing, searchValue],
  )

  return (
    <StyledTextField
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={handleKeyDown}
      InputProps={{
        startAdornment: (
          <SearchStartAdornment
            data-testid="SearchButton"
            isDebouncing={isDebouncing}
            onClick={() => handleSearch(searchValue)}
          />
        ),
      }}
    />
  )
}

export default SearchBar
