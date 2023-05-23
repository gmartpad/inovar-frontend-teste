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
})
