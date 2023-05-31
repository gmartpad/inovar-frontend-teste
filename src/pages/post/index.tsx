import React from 'react'
import { useRouter } from 'next/router'
import PageContainer from '@components/PageContainer'
import { Typography } from '@mui/material'

const Post: React.FC = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <PageContainer>
      <Typography>Post - id: {slug}</Typography>
    </PageContainer>
  )
}

export default Post
