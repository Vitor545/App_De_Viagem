import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Testa se Footer é renderizado corretamente', () => {
  test('Verifica se Footer tem um titulo "App de Viajem"', () => {
    render(<Footer />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });

  test('Verifica se Footer tem uma descrição', () => {
    render(<Footer />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });
});