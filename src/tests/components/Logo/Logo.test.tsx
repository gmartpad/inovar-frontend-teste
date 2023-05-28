import React from 'react'
import { render } from '@testing-library/react'
import Logo from '@components/Logo'

describe('Logo', () => {
  it('renderiza sem crashar', () => {
    const { getByTestId } = render(<Logo text="UX" />)
    const logoElement = getByTestId('logo')
    expect(logoElement).toBeInTheDocument()
  })

  it('mostra o texto correto', () => {
    const { getByTestId } = render(<Logo text="UX" />)
    const logoTextElement = getByTestId('logo-text')
    expect(logoTextElement.textContent).toBe('UX')
  })

  it('aplica o estilo correto', () => {
    const { getByTestId } = render(
      <Logo
        text="UX"
        style={{ backgroundColor: '#123456', color: '#ff00ff' }}
      />,
    )
    const logoElement = getByTestId('logo')
    const logoTextElement = getByTestId('logo-text')
    expect(logoElement).toHaveStyle('background-color: #123456')
    expect(logoTextElement).toHaveStyle('color: #ff00ff')
  })

  it('tem link para a pagina inicial', () => {
    const { getByTestId } = render(<Logo text="ux" />)
    const logoLinkElement = getByTestId('logo')
    expect(logoLinkElement.getAttribute('href')).toBe('/')
  })
})
