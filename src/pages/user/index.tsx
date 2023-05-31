import React from 'react'
import { useRouter } from 'next/router'
import PageContainer from '@components/PageContainer'
import { Typography } from '@mui/material'

const User: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <PageContainer>
      <Typography>User - id: {id}</Typography>
    </PageContainer>
  )
}

export default User
