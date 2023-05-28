import SearchBar from '@components/SearchBar'
import AddPostButton from '@components/AddPostButton'
import Logo from '@components/Logo'
import Divider from '@components/Divider'
import { Box, Container } from '@mui/material'
import { useState } from 'react'
import BurgerMenu from '@components/BurgerMenu'

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
      <Box>
        <AddPostButton onClick={() => console.log('Add Post Button')} />
      </Box>
    </Container>
  )
}
