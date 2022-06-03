import React from 'react';
import { render, screen } from '@testing-library/react';
import Popular from '../page/Popular';

describe('Testa se Popular é renderizado corretamente', () => {
  test('Verifica se Popular tem um titulo', () => {
    render(<Popular />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });

  test('Verifica se Popular tem um subtitulo', () => {
    render(<Popular />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });

  test('Verifica se Popular tem cards', () => {
    render(<Popular />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });
});