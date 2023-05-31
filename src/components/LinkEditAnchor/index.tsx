import { Link as LinkType } from '@components/LinkList'
import { StyledAnchorTypography, StyledBox } from './styled'
import Case from 'case'
import Link from 'next/link'

interface LinkEditAnchor {
  link: LinkType
}

const LinkEditAnchor: React.FC<LinkEditAnchor> = ({ link }) => {
  return (
    <StyledBox>
      <Link href={`/post?slug=${Case.kebab(link.meta.title)}`}>
        <StyledAnchorTypography>Edit</StyledAnchorTypography>
      </Link>
    </StyledBox>
  )
}

export default LinkEditAnchor
