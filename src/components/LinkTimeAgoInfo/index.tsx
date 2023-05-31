import { Link as LinkType } from '@components/LinkList'
import { StyledTimeAgoTypography } from './styled'
import timeAgo from '@src/utils/timeAgo'

interface LinkTimeAgoInfo {
  link: LinkType
}

const LinkTimeAgoInfo: React.FC<LinkTimeAgoInfo> = ({ link }) => {
  return (
    <StyledTimeAgoTypography>
      {timeAgo(Number(link.created_at))}
    </StyledTimeAgoTypography>
  )
}

export default LinkTimeAgoInfo
