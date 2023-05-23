import React, { useState, useEffect, useRef } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  handleSearch: (value: string) => void
}

const SearchBar: React.FC<Props> = ({
  handleSearch
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    if (searchValue !== '') {
      setIsDebouncing(true);
      debounceTimeout.current = setTimeout(() => {
        handleSearch(searchValue);
        setIsDebouncing(false);
      }, 1500);
    }
  }, [searchValue]);

  return (
    <TextField
      label="Search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton data-testid="SearchButton" disabled={isDebouncing} onClick={() => handleSearch(searchValue)}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
