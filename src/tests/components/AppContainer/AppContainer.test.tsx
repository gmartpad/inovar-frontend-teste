import React from 'react'
import { render, screen } from '@testing-library/react'
import AppContainer from '@components/AppContainer'

describe('AppContainer', () => {
  it('renderiza os componentes filhos', () => {
    const TestComponent = () => (
      <div data-testid="test-component">Test Component</div>
    )

    render(
      <AppContainer>
        <TestComponent />
      </AppContainer>,
    )

    expect(screen.getByTestId('test-component')).toBeInTheDocument()
  })
})
