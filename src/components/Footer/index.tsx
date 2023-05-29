import SearchBar from '@components/SearchBar'
import AddPostButton from '@components/AddPostButton'
import Logo from '@components/Logo'
import Divider from '@components/Divider'
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import BurgerMenu from '@components/BurgerMenu'
import ProfileIcon from '@components/ProfileIcon'

const Footer: React.FC = () => {
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
      <Typography color="#000">Footer</Typography>
    </Container>
  )
}

export default Footer
