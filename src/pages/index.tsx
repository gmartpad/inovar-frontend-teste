import SearchBar from '@components/SearchBar'
import AddPostButton from '@components/AddPostButton'
import Logo from '@components/Logo'
import Divider from '@components/Divider'
import { Container } from '@mui/material'

export default function Home() {
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
      <Logo text="UX" />
      <Divider />
      <SearchBar
        handleSearch={(value) => {
          console.log(value)
        }}
      />
      <AddPostButton onClick={() => console.log('Add Post Button')} />
    </Container>
  )
}
