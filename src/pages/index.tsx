import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '@components/SearchBar'
import AddPostButton from '@components/AddPostButton'

export default function Home() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <SearchBar
        handleSearch={(value) => {
          console.log(value)
        }}
      />
      <AddPostButton onClick={() => console.log('Add Post Button')} />
    </div>
  )
}
