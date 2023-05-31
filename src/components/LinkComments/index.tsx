import Link from 'next/link'
import { Link as LinkType } from '@components/LinkList'
import { ChatBubbleStyle, StyledAnchorTypography, StyledBox } from './styled'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import Case from 'case'
import { useMediaQuery } from '@mui/material'

interface LinkCommentsProps {
  link: LinkType
}

const LinkComments: React.FC<LinkCommentsProps> = ({ link }) => {
  const isMobile = useMediaQuery('(max-width: 500px)')

  const commentsLabel = `comment${link.comments !== 1 ? 's' : ''}`

  return (
    <StyledBox>
      <Link href={`/post?slug=${Case.kebab(link.meta.title)}`}>
        <ChatBubbleIcon color="primary" style={ChatBubbleStyle} />
      </Link>
      <Link href={`/post?slug=${Case.kebab(link.meta.title)}`}>
        <StyledAnchorTypography>
          {link.comments} {!isMobile && commentsLabel}
        </StyledAnchorTypography>
      </Link>
    </StyledBox>
  )
}

export default LinkComments
