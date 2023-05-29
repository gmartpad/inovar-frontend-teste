import SearchBar from '@components/SearchBar'
import AddPostButton from '@components/AddPostButton'
import Logo from '@components/Logo'
import Divider from '@components/Divider'
import { Box, Container, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import BurgerMenu from '@components/BurgerMenu'
import ProfileIcon from '@components/ProfileIcon'

const Header: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleSelect = (selectedItems: string[]) => {
    setSelectedItems(selectedItems)
  }

  const isMobile = useMediaQuery('(max-width:650px)')

  return (
    <Container
      style={{
        backgroundColor: '#fff',
        display: 'flex',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        style={{
          display: 'flex',
        }}
      >
        <Logo text="UX" />
        <Divider />
        <BurgerMenu selectedItems={selectedItems} onSelect={handleSelect} />
        <SearchBar
          handleSearch={(value) => {
            console.log(value)
          }}
        />
      </Box>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {!isMobile && <AddPostButton />}
        <ProfileIcon />
      </Box>
    </Container>
  )
}

export default Header
