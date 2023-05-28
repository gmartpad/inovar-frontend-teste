import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AddPostButton from '@components/AddPostButton'

describe('AddPostButton', () => {
  it('renderiza corretamente', () => {
    const { getByText } = render(<AddPostButton onClick={() => {}} />)
    expect(getByText('Add Post')).toBeInTheDocument()
  })

  it('chama a funcao onClick quando é clicada', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<AddPostButton onClick={handleClick} />)
    fireEvent.click(getByText('Add Post'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renderiza o StyledAddIcon e o VerticalLine corretamente', () => {
    const { getByTestId } = render(<AddPostButton onClick={() => {}} />)

    // Isso checa se o StyledButton tá presente no DOM
    expect(getByTestId('add-post-button')).toBeInTheDocument()
    // Isso checa se o StyledAddIcon tá presente no DOM
    expect(getByTestId('add-post-button-add-icon')).toBeInTheDocument()
    // Isso checa se o VerticalLine tá presente no DOM
    expect(getByTestId('add-post-button-v-line')).toBeInTheDocument()
  })
})
