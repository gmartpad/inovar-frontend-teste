import Link from 'next/link'
import { StyledTitleTypography, StyledUrlTypography } from './styled'
import { Link as LinkType } from '@components/LinkList'
import { Link as MUILink } from '@mui/material'
import Case from 'case'

interface LinkUrlAndTitleProps {
  link: LinkType
}

const LinkUrlAndTitleAnchor: React.FC<LinkUrlAndTitleProps> = ({ link }) => {
  return (
    <>
      <MUILink underline="hover" href={`https://${link.meta.url}`}>
        <StyledUrlTypography>{link.meta.url}</StyledUrlTypography>
      </MUILink>
      <Link href={`/post?slug=${Case.kebab(link.meta.title)}`}>
        <StyledTitleTypography>{link.meta.title}</StyledTitleTypography>
      </Link>
    </>
  )
}

export default LinkUrlAndTitleAnchor
