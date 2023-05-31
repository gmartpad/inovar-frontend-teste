import { Link as LinkType } from '@components/LinkList'
import ProfileImage from '@components/ProfileImage'
import Case from 'case'
import Link from 'next/link'

interface LinkAuthorImageProps {
  link: LinkType
  imageSrc: string
}

const LinkAuthorImage: React.FC<LinkAuthorImageProps> = ({
  link,
  imageSrc,
}) => {
  return (
    <Link href={`/user?id=${Case.snake(link.meta.author)}`}>
      <ProfileImage
        imageSrc={imageSrc}
        width={24}
        height={24}
        borderRadius={3}
      />
    </Link>
  )
}

export default LinkAuthorImage
