import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '@components/SearchBar';

describe('Componente SearchBar', () => {
  test('renderiza sem crashar', async () => {
    const handleSearch = jest.fn();
    const { getByLabelText } = render(<SearchBar handleSearch={handleSearch}/>);
    const input = getByLabelText('Search');
    expect(input).toBeInTheDocument();
  });

  test('gerencia mudanca do valor de pesquisa', async () => {
    const handleSearch = jest.fn();
    const { getByLabelText } = render(<SearchBar handleSearch={handleSearch} />);
    const input = getByLabelText('Search');
    fireEvent.change(input, { target: { value: 'react' } });
    expect(input).toHaveValue('react');
  });

  test('gerencia click do botao de pesquisa', async () => {
    jest.useFakeTimers()

    const handleSearch = jest.fn();
    const { getByLabelText } = render(<SearchBar handleSearch={handleSearch} />);
    const input = getByLabelText('Search');
    const button = await screen.getByTestId('SearchButton');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'react' } });
    })

    act(() => {
      jest.advanceTimersByTime(1500);
    })

    await act(async () => {
      fireEvent.click(button);
    })

    expect(handleSearch).toHaveBeenCalledWith('react');
  });

  test('faz debounce input de pesquisa', async () => {
    jest.useFakeTimers();

    const handleSearch = jest.fn();
    const { getByLabelText } = render(<SearchBar handleSearch={handleSearch} />);
    const input = getByLabelText('Search');
    
    await act(async () => {
      fireEvent.change(input, { target: { value: 'react' } });
    })
    
    act(() => {
      jest.advanceTimersByTime(1000);
    })
    
    await act(async () => {
      fireEvent.change(input, { target: { value: 'react hooks' } });
    })
    
    act(() => {
      jest.advanceTimersByTime(500);
    })
    
    expect(handleSearch).not.toHaveBeenCalled();
    
    act(() => {
      jest.advanceTimersByTime(1000);
    })
    
    expect(handleSearch).toHaveBeenCalledWith('react hooks');
  });
});
