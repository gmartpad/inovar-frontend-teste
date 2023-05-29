import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProfileIcon from '@components/ProfileIcon'
import { useRouter } from 'next/router'
import Case from 'case'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('ProfileIcon', () => {
  ;(useRouter as jest.Mock).mockImplementation(() => ({
    asPath: '/',
  }))

  it('renderiza o componente ProfileIcon', () => {
    render(<ProfileIcon />)
    const profileIconButton = screen.getByTestId('profile-icon-button')
    expect(profileIconButton).toBeInTheDocument()
  })

  it('gerencia o evento de clique e mostrar o Popover', async () => {
    render(<ProfileIcon />)
    const profileIconButton = screen.getByTestId('profile-icon-button')
    expect(profileIconButton).toBeInTheDocument()

    await waitFor(() => {
      userEvent.click(profileIconButton)
    })

    const profileIconPopover = await waitFor(() =>
      screen.getByTestId('profile-icon-popover'),
    )

    expect(profileIconPopover).toBeInTheDocument()
  })

  it('verifica se as opcoes disponiveis estao visiveis', async () => {
    render(<ProfileIcon />)

    const profileIconButton = screen.getByTestId('profile-icon-button')
    expect(profileIconButton).toBeInTheDocument()

    await waitFor(() => {
      userEvent.click(profileIconButton)
    })

    const profileIconPopover = await waitFor(() =>
      screen.getByTestId('profile-icon-popover'),
    )
    expect(profileIconPopover).toBeInTheDocument()

    const paths = ['/about', '/contact', '/profile', '/sign-in']

    paths.map((i) => {
      const currentItem = screen.getByText(Case.capital(i.replace('/', '')))
      expect(currentItem).toBeInTheDocument()
    })
  })
})
