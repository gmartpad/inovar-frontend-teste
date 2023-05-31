import { Typography, useMediaQuery } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import LinkList, { Link } from '@components/LinkList'
import PageContainer from '@components/PageContainer'
import LoadMoreButton from '@components/LoadMoreButton'
import { useAppSelector } from '@store/reduxHooks'
import { getOrderSelectedValue } from '@features/global/globalSlice'

interface HomeProps {
  links: Link[]
}

const Home: React.FC<HomeProps> = ({ links }) => {
  const orderSelectedValues = useAppSelector(getOrderSelectedValue)

  const [page, setPage] = useState<number>(1)
  const [currentLinks, setCurrentLinks] = useState([])
  const [showLoadMore, setShowLoadMore] = useState<boolean>(true)
  const [disabledLoadMore, setDisabledLoadMore] = useState<boolean>(false)

  const isMobile = useMediaQuery('(max-width:650px)')

  const handleLoadMore = useCallback(() => {
    setDisabledLoadMore(true)
    setPage((prevPage) => prevPage + 1)
  }, [setPage])

  const handleAddLinks = useCallback(() => {
    const newCurrentLinks = links.slice(0, page * 6)
    setCurrentLinks(newCurrentLinks)
    if (links?.length < page * 6) {
      setShowLoadMore(false)
    }
    setDisabledLoadMore(false)
  }, [links, setCurrentLinks, page, setShowLoadMore])

  useEffect(() => {
    handleAddLinks()
  }, [page])

  return (
    <PageContainer>
      <LinkList links={currentLinks} />
      {showLoadMore && (
        <LoadMoreButton
          disabledLoadMore={disabledLoadMore}
          handleLoadMore={handleLoadMore}
        />
      )}
    </PageContainer>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `https://www.mocky.io/v2/5a6bc16631000078341b8b77`,
    )
    const data = await response.json()
    const { links } = data
    return { props: { links } }
  } catch (error) {
    console.error(error)
    return { props: { links: [] } }
  }
}

export default Home
