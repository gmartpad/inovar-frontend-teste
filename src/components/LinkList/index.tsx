import { Divider, useMediaQuery } from '@mui/material'
import {
  StyledArrowIconButton,
  StyledDivider,
  StyledLabelBox,
  StyledLabelTypography,
  StyledLinkInfoBox,
  StyledLinkItemBox,
  StyledLoadingSearchBox,
  StyledNoResultsBox,
  StyledNoResultsTypography,
  StyledOtherInfoBox,
  StyledSecondaryInfoBox,
  StyledUpvoteBox,
  StyledUpvoteTypography,
  StyledUpvoteTypographyBox,
  StyledUrlAndTitleBox,
} from './styled'
import Case from 'case'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import LinkEditAnchor from '@components/LinkEditAnchor'
import LinkComments from '@components/LinkComments'
import { DividerDot } from '@components/DividerDot'
import LinkTimeAgoInfo from '@components/LinkTimeAgoInfo'
import LinkAuthorAnchor from '@components/LinkAuthorAnchor'
import LinkAuthorImage from '@components/LinkAuthorImage'
import LinkUrlAndTitleAnchor from '@components/LinkUrlAndTitleAnchor'
import { useAppSelector } from '@store/reduxHooks'
import {
  getDebounceActive,
  getOrderSelectedValue,
  getPostSearchValue,
} from '@features/global/globalSlice'
import LoadingSearch from '@components/LoadingSearch'
import customTheme from '@src/theme'

export type Link = {
  meta: {
    author: string
    title: string
    url: string
  }
  category: string
  comments: number
  created_at: number
  upvotes: number
}

interface LinkListProps {
  links: Link[]
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
  const [currentUser, setCurrentUser] = useState<string>()
  const [imageSrc, setImageSrc] = useState<string>('')
  const [orderedLinks, setOrderedLinks] = useState<Link[]>(links)

  const postSearchValue = useAppSelector(getPostSearchValue)
  const orderSelectedValue = useAppSelector(getOrderSelectedValue)
  const debounceActive = useAppSelector(getDebounceActive)

  const isMobile = useMediaQuery('(max-width: 600px)')

  useEffect(() => {
    setImageSrc('http://github.com/gmartpad.png')
    if (links[0] && links[0].meta.author) {
      setCurrentUser(links[0].meta.author)
    }
  }, [links, setImageSrc])

  const handleNewOrder = useCallback(
    (orderSelectedValue) => {
      let filteredLinks
      if (postSearchValue !== '') {
        filteredLinks = links.filter(
          (link) =>
            link.meta.author
              .toLowerCase()
              .includes(String(postSearchValue).toLowerCase()) ||
            link.meta.title
              .toLowerCase()
              .includes(String(postSearchValue).toLowerCase()),
        )
      } else {
        filteredLinks = links
      }
      switch (orderSelectedValue) {
        case 'Popularity (Highest to lowest)':
          const popHighToLow = [...filteredLinks].sort(
            (a: Link, b: Link) => b.upvotes - a.upvotes,
          )
          setOrderedLinks(popHighToLow)
          break
        case 'Popularity (Lowest to highest)':
          const popLowToHigh = [...filteredLinks].sort(
            (a: Link, b: Link) => a.upvotes - b.upvotes,
          )
          setOrderedLinks(popLowToHigh)
          break
        case 'Date (Newest to oldest)':
          const dateRecentToOld = [...filteredLinks].sort(
            (a: Link, b: Link) => b.created_at - a.created_at,
          )
          setOrderedLinks(dateRecentToOld)
          break
        case 'Date (Oldest to newest)':
          const dateOldToRecent = [...filteredLinks].sort(
            (a: Link, b: Link) => a.created_at - b.created_at,
          )
          setOrderedLinks(dateOldToRecent)
          break
        case 'Comments (Largest amount to lowest)':
          const commentsHighToLow = [...filteredLinks].sort(
            (a: Link, b: Link) => b.comments - a.comments,
          )
          setOrderedLinks(commentsHighToLow)
          break
        case 'Comments (Lowest amount to largest)':
          const commentsLowToHigh = [...filteredLinks].sort(
            (a: Link, b: Link) => a.comments - b.comments,
          )
          setOrderedLinks(commentsLowToHigh)
          break
        default:
          setOrderedLinks(filteredLinks)
          break
      }
    },
    [orderSelectedValue, postSearchValue, setOrderedLinks, links],
  )

  useEffect(() => {
    handleNewOrder(orderSelectedValue[0])
  }, [handleNewOrder, orderSelectedValue, postSearchValue])

  const handleLabelColor = useCallback((category: string) => {
    switch (category) {
      case 'Product Design':
        return '#00e2ad'
      case 'Ux Ui':
        return '#00bbff'
      case 'Case Study':
        return '#f4973c'
      case 'Discussion':
        return '#4271d6'
      default:
        return customTheme.palette.primary.main
    }
  }, [])

  return (
    <StyledLinkInfoBox>
      {debounceActive ? (
        <StyledLoadingSearchBox>
          <LoadingSearch />
        </StyledLoadingSearchBox>
      ) : orderedLinks?.length > 0 ? (
        orderedLinks.map((i, k) => (
          <StyledLinkItemBox key={k}>
            <StyledUpvoteBox data-testid="upvotes">
              <StyledArrowIconButton
                onClick={() => alert('upvote')}
                aria-label="upvote button"
              >
                <KeyboardArrowUpIcon color="primary" />
              </StyledArrowIconButton>
              <StyledUpvoteTypographyBox>
                <StyledUpvoteTypography>{i.upvotes}</StyledUpvoteTypography>
              </StyledUpvoteTypographyBox>
            </StyledUpvoteBox>
            <StyledLinkInfoBox data-testid="link-info">
              <StyledUrlAndTitleBox data-testid="url-and-title">
                <LinkUrlAndTitleAnchor link={i} />
              </StyledUrlAndTitleBox>
              <StyledOtherInfoBox ismobile={isMobile} data-testid="other-info">
                <StyledLabelBox
                  ismobile={isMobile}
                  style={{
                    backgroundColor: handleLabelColor(Case.capital(i.category)),
                  }}
                >
                  <StyledLabelTypography>
                    {Case.capital(i.category)}
                  </StyledLabelTypography>
                </StyledLabelBox>
                {!isMobile && <StyledDivider orientation="vertical" />}
                <StyledSecondaryInfoBox>
                  <LinkAuthorImage link={i} imageSrc={imageSrc} />
                  <LinkAuthorAnchor link={i} />
                  <LinkTimeAgoInfo link={i} />
                  <DividerDot />
                  <LinkComments link={i} />
                  {currentUser === i.meta.author && <LinkEditAnchor link={i} />}
                </StyledSecondaryInfoBox>
              </StyledOtherInfoBox>
            </StyledLinkInfoBox>
          </StyledLinkItemBox>
        ))
      ) : (
        <StyledNoResultsBox>
          <StyledNoResultsTypography>
            There are no available links that match your search
          </StyledNoResultsTypography>
        </StyledNoResultsBox>
      )}
    </StyledLinkInfoBox>
  )
}

export default LinkList
