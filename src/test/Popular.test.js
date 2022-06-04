import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Popular from '../page/Popular';

describe('Testa se Popular é renderizado corretamente', () => {
  test('Verifica se Popular tem um titulo', () => {
    render(<Popular />);
    const tituloElement = screen.getByTestId('titulo');
    expect(tituloElement).toBeInTheDocument();
    expect(tituloElement).toHaveTextContent('Lugares Populares.');
  });

  test('Verifica se Popular tem um subtitulo', () => {
    render(<Popular />);
    const subtituloElement = screen.getByTestId('subtitulo');
    expect(subtituloElement).toBeInTheDocument();
    expect(subtituloElement).toHaveTextContent('Faça sua escolha');
  });

  test('Verifica se Popular tem cards', () => {
    render(<Popular />);
    const cardElement = screen.getAllByTestId('card');
    expect(cardElement).not.toBeNull();
    expect(cardElement).toHaveLength(5);
  });
});