import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, fireEvent, screen } from '@testing-library/react'
import SearchBar from '@components/SearchBar'

describe('SearchBar', () => {
  it('renderiza sem crashar', async () => {
    const handleSearch = jest.fn()
    const { getByRole } = render(<SearchBar handleSearch={handleSearch} />)
    const input = getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('gerencia a mudanca do valor de pesquisa', async () => {
    const handleSearch = jest.fn()
    const { getByRole } = render(<SearchBar handleSearch={handleSearch} />)
    const input = getByRole('textbox')
    fireEvent.change(input, { target: { value: 'react' } })
    expect(input).toHaveValue('react')
  })

  it('gerencia o click do botao de buscahandles search button click', async () => {
    jest.useFakeTimers()

    const handleSearch = jest.fn()
    const { getByRole } = render(<SearchBar handleSearch={handleSearch} />)
    const input = getByRole('textbox')
    const button = screen.getByTestId('SearchButton')

    await act(async () => {
      fireEvent.change(input, { target: { value: 'react' } })
    })

    act(() => {
      jest.advanceTimersByTime(1500)
    })

    await act(async () => {
      fireEvent.click(button)
    })

    expect(handleSearch).toHaveBeenCalledWith('react')
  })

  it('realiza o debounce no input de pesquisa', async () => {
    jest.useFakeTimers()

    const handleSearch = jest.fn()
    const { getByRole } = render(<SearchBar handleSearch={handleSearch} />)
    const input = getByRole('textbox')

    await act(async () => {
      fireEvent.change(input, { target: { value: 'react' } })
    })

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    await act(async () => {
      fireEvent.change(input, { target: { value: 'react hooks' } })
    })

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(handleSearch).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(handleSearch).toHaveBeenCalledWith('react hooks')
  })
})
