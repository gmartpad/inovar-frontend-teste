import customTheme from '@src/theme'
import { Comment } from 'react-loader-spinner'

const LoadingSearch: React.FC = () => {
  return (
    <Comment
      visible={true}
      height="80"
      width="80"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor={customTheme?.palette?.primary.main}
    />
  )
}

export default LoadingSearch
