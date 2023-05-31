import { Link as LinkType } from '@components/LinkList'
import { StyledAnchorTypography } from './styled'
import Case from 'case'
import Link from 'next/link'

interface LinkAuthorAnchor {
  link: LinkType
}

const LinkAuthorAnchor: React.FC<LinkAuthorAnchor> = ({ link }) => {
  return (
    <Link href={`/user?id=${Case.snake(link.meta.author)}`}>
      <StyledAnchorTypography>{link.meta.author}</StyledAnchorTypography>
    </Link>
  )
}

export default LinkAuthorAnchor
