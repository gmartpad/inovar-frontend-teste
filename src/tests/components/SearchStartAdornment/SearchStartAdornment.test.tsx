import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchStartAdornment from '@components/SearchStartAdornment'

describe('SearchStartAdornment', () => {
  const defaultProps = {
    isDebouncing: false,
    onClick: jest.fn(),
  }

  it('renderiza corretamente', () => {
    const { getByTestId } = render(<SearchStartAdornment {...defaultProps} />)
    expect(getByTestId('SearchButton')).toBeInTheDocument()
  })

  it('chama a funcao onClick quando clicada', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <SearchStartAdornment {...defaultProps} onClick={handleClick} />,
    )
    fireEvent.click(getByTestId('SearchButton'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('desabilita o botao quando isDebouncing tem valor verdadeiro', () => {
    const { getByTestId } = render(
      <SearchStartAdornment {...defaultProps} isDebouncing={true} />,
    )
    expect(getByTestId('SearchButton')).toBeDisabled()
  })
})
