import LoadingSpinner from '@components/LoadingSpinner'
import { StyledImage } from './styled'

interface ProfileImageProps {
  imageSrc: string
  width: number
  height: number
  borderRadius: number
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  imageSrc,
  width,
  height,
  borderRadius,
}) => {
  return (
    <StyledImage
      key="profile-icon"
      src={imageSrc}
      alt={'Perfil de Usuario'}
      width={width}
      height={height}
      borderRadius={borderRadius}
      showLoading={<LoadingSpinner />}
      onError={null}
    />
  )
}

export default ProfileImage
