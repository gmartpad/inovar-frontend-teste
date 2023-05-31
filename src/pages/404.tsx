import PageContainer from '@components/PageContainer'
import { Typography } from '@mui/material'
import React from 'react'

const ErrorPage: React.FC = () => {
  return (
    <PageContainer>
      <Typography>Sorry, this page does not exist</Typography>
    </PageContainer>
  )
}

export default ErrorPage
