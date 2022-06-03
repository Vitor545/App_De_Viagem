import React from 'react';
import { render, screen } from '@testing-library/react';
import Subscribe from './Subscribe';

describe('Testa se Subscribe é renderizado corretamente', () => {
  test('Verifica se Subscribe tem um titulo', () => {
    render(<Subscribe />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });

  test('Verifica se Subscribe tem uma descrição', () => {
    render(<Subscribe />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });

  test('Verifica se Subscribe tem um botão', () => {
    render(<Subscribe />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });
});
