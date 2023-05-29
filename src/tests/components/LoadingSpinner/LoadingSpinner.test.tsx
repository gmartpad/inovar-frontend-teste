import React from 'react'
import { render, screen } from '@testing-library/react'
import LoadingSpinner from '@components/LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renderiza o componente LoadingSpinner', () => {
    render(<LoadingSpinner />)
    const spinnerElement = screen.getByTestId('tail-spin-loading')
    expect(spinnerElement).toBeInTheDocument()
  })
})
