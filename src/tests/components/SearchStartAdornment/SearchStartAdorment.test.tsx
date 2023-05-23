import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchStartAdornment from '@components/SearchStartAdornment'

describe('SearchStartAdornment', () => {
  it('renderiza corretamente', () => {
    const { getByTestId } = render(
      <SearchStartAdornment isDebouncing={false} onClick={() => {}} />,
    )
    expect(getByTestId('SearchButton')).toBeInTheDocument()
  })

  it('chama a funcao onClick quando clicada', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <SearchStartAdornment isDebouncing={false} onClick={handleClick} />,
    )
    fireEvent.click(getByTestId('SearchButton'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('desativa o botao quando o isDebouncing tem valor verdadeiro', () => {
    const { getByTestId } = render(
      <SearchStartAdornment isDebouncing={true} onClick={() => {}} />,
    )
    expect(getByTestId('SearchButton')).toBeDisabled()
  })
})
