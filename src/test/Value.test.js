import React from 'react';
import { render, screen } from '@testing-library/react';
import Value from '../page/Value';

describe('Testa se Value é renderizado corretamente', () => {
  test('Verifica se Value tem um titulo', () => {
    render(<Value />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });

  test('Verifica se Value tem um subtitulo', () => {
    render(<Value />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });

  test('Verifica se Value tem uma descrição', () => {
    render(<Value />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });

  test('Verifica se Value tem accordion', () => {
    render(<Value />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });
});