import React from 'react'
import { render, screen } from '@testing-library/react'
import Divider from '@components/Divider'

describe('Divider', () => {
  test('renderiza corretamente', () => {
    render(<Divider />)
    const pipeSymbol = screen.getByTestId('pipe')
    expect(pipeSymbol).toBeInTheDocument()
  })

  test('tem o estilo correto', () => {
    render(<Divider />)
    const pipeSymbol = screen.getByTestId('pipe')

    expect(pipeSymbol).toHaveStyle({
      display: 'flex',
      minWidth: '1px',
      background: '#ddd',
      borderRadius: '2px',
      margin: '0 16px 0 16px',
      height: '50px',
    })
  })
})
