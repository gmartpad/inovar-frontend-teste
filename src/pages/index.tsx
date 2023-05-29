import SearchBar from '@components/SearchBar'
import AddPostButton from '@components/AddPostButton'
import Logo from '@components/Logo'
import Divider from '@components/Divider'
import { Box, Container } from '@mui/material'
import { useState } from 'react'
import BurgerMenu from '@components/BurgerMenu'
import ProfileIcon from '@components/ProfileIcon'

export default function Home() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleSelect = (selectedItems: string[]) => {
    setSelectedItems(selectedItems)
  }

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
        <AddPostButton />
        <ProfileIcon />
      </Box>
    </Container>
  )
}
