import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page/Home';

describe('Testa se Home é renderizado corretamente', () => {
  test('Verifica se Home tem um titulo', () => {
    render(<Home />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });

  test('Verifica se Home tem uma descrição', () => {
    render(<Home />);
    const logoElement = screen.getByTestId('inicio');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Início');
  });

  test('Verifica se Home tem um input', () => {
    render(<Home />);
    const logoElement = screen.getByTestId('lugares');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Lugares');
  });

  test('Verifica se Home tem uma imagem', () => {
    render(<Home />);
    const logoElement = screen.getByTestId('nossosvalores');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Nossos Valores');
  });

  test('Verifica se Home tem valores', () => {
    render(<Home />);
    const logoElement = screen.getByTestId('contato');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Contato');
  });

});
