import React from 'react'
import { render } from '@testing-library/react'
import AddPostButton from '@components/AddPostButton'

describe('AddPostButton', () => {
  it('renderiza corretamente', () => {
    const { getByText } = render(<AddPostButton />)
    expect(getByText('Add Post')).toBeInTheDocument()
  })

  it('renderiza o StyledAddIcon e o VerticalLine corretamente', () => {
    const { getByTestId } = render(<AddPostButton />)

    // Isso checa se o StyledButton tá presente no DOM
    expect(getByTestId('add-post-button')).toBeInTheDocument()
    // Isso checa se o StyledAddIcon tá presente no DOM
    expect(getByTestId('add-post-button-add-icon')).toBeInTheDocument()
    // Isso checa se o VerticalLine tá presente no DOM
    expect(getByTestId('add-post-button-v-line')).toBeInTheDocument()
  })
})
