import SearchBar from '@components/SearchBar'
import AddPostButton from '@components/AddPostButton'
import Logo from '@components/Logo'
import Divider from '@components/Divider'
import { useMediaQuery } from '@mui/material'
import React from 'react'
import BurgerMenu from '@components/BurgerMenu'
import ProfileIcon from '@components/ProfileIcon'
import CustomContainer from '@components/ComponentContainer'
import { useRouter } from 'next/router'
import {
  StyledHeaderBox,
  StyledLeftSectionBox,
  StyledRightSectionBox,
} from './styled'

const Header: React.FC = () => {
  const router = useRouter()
  const { asPath } = router

  const isMobile = useMediaQuery('(max-width:780px)')

  return (
    <StyledHeaderBox>
      <CustomContainer>
        <StyledLeftSectionBox>
          <Logo text="UX" />
          {asPath === '/' && (
            <>
              <Divider />
              <BurgerMenu />
              <SearchBar />
            </>
          )}
        </StyledLeftSectionBox>
        <StyledRightSectionBox>
          {!isMobile && <AddPostButton />}
          <ProfileIcon />
        </StyledRightSectionBox>
      </CustomContainer>
    </StyledHeaderBox>
  )
}

export default Header
