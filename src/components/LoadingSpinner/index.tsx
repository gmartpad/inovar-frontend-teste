import customTheme from '@src/theme'
import { TailSpin } from 'react-loader-spinner'

const LoadingSpinner: React.FC = () => {
  return (
    <TailSpin
      height="44"
      width="44"
      color={customTheme?.palette?.primary?.main}
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  )
}

export default LoadingSpinner
