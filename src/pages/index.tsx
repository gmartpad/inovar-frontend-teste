import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '@components/SearchBar'
import AddPostButton from '@components/AddPostButton'
import Logo from '@components/Logo'

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-betweeb',
      }}
    >
      <Logo text="UX" />
      <SearchBar
        handleSearch={(value) => {
          console.log(value)
        }}
      />
      <AddPostButton onClick={() => console.log('Add Post Button')} />
    </div>
  )
}
