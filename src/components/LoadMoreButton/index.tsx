import { StyledAutorenewIcon, StyledButton, StyledTypography } from './styled'

interface LoadMoreButtonProps {
  disabledLoadMore: boolean
  handleLoadMore: () => void
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  disabledLoadMore,
  handleLoadMore,
}) => {
  return (
    <StyledButton
      disabled={disabledLoadMore}
      startIcon={<StyledAutorenewIcon color="primary" />}
      onClick={handleLoadMore}
    >
      <StyledTypography color="primary">Load More</StyledTypography>
    </StyledButton>
  )
}

export default LoadMoreButton
