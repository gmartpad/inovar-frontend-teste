import Logo from '@components/Logo'
import { useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomContainer from '@components/ComponentContainer'
import { DividerDot } from '@components/DividerDot'
import Link from 'next/link'
import LoadingSpinner from '@components/LoadingSpinner'
import {
  StyledAnchorTypography,
  StyledCopyrightBox,
  StyledFooterBox,
  StyledGrayTypography,
  StyledImage,
  StyledLinksAndCopyrightBox,
  StyledLinksBox,
  StyledLogoAndTitleBox,
  StyledMUILink,
  StyledSocialMediaBox,
  StyledSocialMediaTypography,
  StyledTitleBox,
  StyledTitleTypography,
} from './styled'

const Footer: React.FC = () => {
  const [facebookLogo, setFacebookLogo] = useState<string>('')
  const [twitterLogo, setTwitterLogo] = useState<string>('')

  useEffect(() => {
    setFacebookLogo(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/36px-Facebook_logo_36x36.svg.png?20150724010035',
    )
    setTwitterLogo(
      'https://i.pinimg.com/564x/f3/6f/51/f36f511b261596a2debe85d844bb1b87.jpg',
    )
  }, [])

  const isMobile = useMediaQuery('(max-width:750px)')

  const isSmallerMobile = useMediaQuery('(max-width: 428px)')

  return (
    <CustomContainer>
      <StyledFooterBox ismobile={isMobile}>
        <StyledLogoAndTitleBox ismobile={isMobile}>
          <Logo text="UX" />
          <StyledTitleBox>
            <StyledTitleTypography>The UX Library</StyledTitleTypography>
            <StyledGrayTypography>
              Community curated design content & discussion
            </StyledGrayTypography>
          </StyledTitleBox>
        </StyledLogoAndTitleBox>
        <StyledLinksAndCopyrightBox>
          <StyledLinksBox issmallermobile={isSmallerMobile}>
            <StyledSocialMediaBox>
              <StyledMUILink href="https://www.facebook.com/InovarSistemas/">
                <StyledImage
                  src={facebookLogo}
                  alt={'Facebook'}
                  width={16}
                  height={16}
                  showLoading={<LoadingSpinner />}
                  onError={null}
                />
                <StyledSocialMediaTypography>
                  Facebook
                </StyledSocialMediaTypography>
              </StyledMUILink>
              <StyledMUILink href="https://twitter.com">
                <StyledImage
                  src={twitterLogo}
                  alt={'Twitter'}
                  width={16}
                  height={16}
                  showLoading={<LoadingSpinner />}
                  onError={null}
                />
                <StyledSocialMediaTypography>
                  Twitter
                </StyledSocialMediaTypography>
              </StyledMUILink>
            </StyledSocialMediaBox>
            {!isSmallerMobile && <DividerDot />}
            <StyledSocialMediaBox>
              <Link href="/about">
                <StyledAnchorTypography>About</StyledAnchorTypography>
              </Link>
              <Link href="/contact">
                <StyledAnchorTypography>Contact</StyledAnchorTypography>
              </Link>
              <Link href="/sign-in">
                <StyledAnchorTypography>Sign in</StyledAnchorTypography>
              </Link>
            </StyledSocialMediaBox>
          </StyledLinksBox>
          <StyledCopyrightBox ismobile={isMobile}>
            <StyledGrayTypography>© 2014 - The UX Library</StyledGrayTypography>
          </StyledCopyrightBox>
        </StyledLinksAndCopyrightBox>
      </StyledFooterBox>
    </CustomContainer>
  )
}

export default Footer
