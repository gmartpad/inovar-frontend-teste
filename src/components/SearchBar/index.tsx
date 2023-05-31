import React, { useState, useEffect, useRef, useCallback } from 'react'
import SearchStartAdornment from '@components/SearchStartAdornment'
import { StyledTextField } from './styled'
import { useAppDispatch } from '@store/reduxHooks'
import {
  setDebounceActive,
  setPostSearchValue,
} from '@features/global/globalSlice'

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch()

  const [searchValue, setSearchValue] = useState<string>('')
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false)
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleSearch = useCallback(
    (searchValue: string) => {
      dispatch(setPostSearchValue(searchValue))
    },
    [dispatch, setPostSearchValue],
  )

  const handleReduxDebounce = useCallback(
    (value: boolean) => {
      dispatch(setDebounceActive(value))
    },
    [dispatch, setDebounceActive],
  )

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current)
    }
    setIsDebouncing(true)
    handleReduxDebounce(true)
    debounceTimeout.current = setTimeout(() => {
      handleSearch(searchValue)
      setIsDebouncing(false)
      handleReduxDebounce(false)
    }, 1500)
  }, [searchValue, handleSearch])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current)
        }
        handleSearch(searchValue)
        setIsDebouncing(false)
        handleReduxDebounce(false)
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
