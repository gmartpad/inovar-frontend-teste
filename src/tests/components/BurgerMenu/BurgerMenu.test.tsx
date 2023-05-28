// /tests/BurgerMenu.test.tsx
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestBurgerMenu from './TestBurgerMenu'

describe('BurgerMenu', () => {
  it('renderiza sem erros', () => {
    render(<TestBurgerMenu />)
    const container = screen.getByTestId('burger-menu')
    expect(container).toBeInTheDocument()
  })

  it('renderiza o componente MultipleSelect com as props corretas', async () => {
    render(<TestBurgerMenu />)

    const burgerMenuButton = screen.getByTestId('burger-menu-button')
    await waitFor(() => {
      userEvent.click(burgerMenuButton)
    })

    const burgerInputLabel = await waitFor(() =>
      screen.getByTestId('burger-input-label'),
    )
    expect(burgerInputLabel).toBeInTheDocument()

    expect(burgerInputLabel.textContent).toBe('Filtrar...')
  })
})
