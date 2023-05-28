import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MultipleSelect from '@components/MultipleSelect'
import TestMultipleSelect from './TestMultipleSelect'

describe('MultipleSelect', () => {
  const selectOptions = ['One', 'Two', 'Three']

  it('renderiza sem crashar', () => {
    const { getByText } = render(
      <TestMultipleSelect selectOptions={selectOptions} />,
    )

    expect(getByText('Filtrar...')).toBeInTheDocument()
  })

  it('componente renderiza as opcoes', async () => {
    render(<TestMultipleSelect selectOptions={selectOptions} />)

    const multipleSelect = screen.getByRole('button')

    await waitFor(async () => {
      userEvent.click(multipleSelect)
    })

    const optionOne = await waitFor(() =>
      screen.getByRole('option', { name: 'One' }),
    )
    const optionTwo = await waitFor(() =>
      screen.getByRole('option', { name: 'Two' }),
    )

    expect(optionOne).toBeInTheDocument()
    expect(optionTwo).toBeInTheDocument()
  })

  it('limpa a selecao quando desselecionada', async () => {
    render(<TestMultipleSelect selectOptions={selectOptions} />)

    const multipleSelect = screen.getByRole('button')
    userEvent.click(multipleSelect)

    const optionOne = await waitFor(() =>
      screen.getByRole('option', { name: selectOptions[0] }),
    )

    await waitFor(() => {
      userEvent.click(optionOne)
    })

    const idOne = await waitFor(() =>
      screen.getByTestId(`id_${selectOptions[0]}`),
    )

    expect(idOne).toBeInTheDocument()

    await waitFor(() => {
      userEvent.click(optionOne)
    })

    const idOneNot = await waitFor(() =>
      screen.queryByTestId(`id_${selectOptions[0]}`),
    )

    expect(idOneNot).not.toBeInTheDocument()
  })

  it('chama o onSelect com itens selecionados', async () => {
    const onSelectMock = jest.fn()
    const selectedItems = []
    const selectOptions = ['One', 'Two', 'Three']

    render(
      <MultipleSelect
        selectedItems={selectedItems}
        onSelect={onSelectMock}
        selectOptions={selectOptions}
      />,
    )

    const multipleSelect = screen.getByRole('button')

    await waitFor(() => {
      userEvent.click(multipleSelect)
    })

    const optionOne = await screen.findByRole('option', {
      name: selectOptions[0],
    })

    await waitFor(() => {
      userEvent.click(optionOne)
    })

    await waitFor(() =>
      expect(onSelectMock).toHaveBeenCalledWith([selectOptions[0]]),
    )
  })
})
