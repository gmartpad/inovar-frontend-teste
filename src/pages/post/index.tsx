import React from 'react'
import { useRouter } from 'next/router'

const Post: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  return <div>Post - id: {id}</div>
}

export default Post
