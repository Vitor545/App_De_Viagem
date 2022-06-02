import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Testa se Header é renderizado corretamente', () => {
  test('Verifica se Header tem uma logo', () => {
    render(<Header />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Viagem');
  });

  test('Verifica se Header tem um link para a pagina Inicio', () => {
    render(<Header />);
    const logoElement = screen.getByTestId('inicio');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Início');
  });

  test('Verifica se Header tem um link para a pagina Lugares', () => {
    render(<Header />);
    const logoElement = screen.getByTestId('lugares');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Lugares');
  });

  test('Verifica se Header tem um link para a pagina Nossos Valores', () => {
    render(<Header />);
    const logoElement = screen.getByTestId('nossosvalores');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Nossos Valores');
  });

  test('Verifica se Header tem um link para a pagina Contato', () => {
    render(<Header />);
    const logoElement = screen.getByTestId('contato');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Contato');
  });

  test('Verifica se Header tem um botão cadastrar', () => {
    render(<Header />);
    const logoElement = screen.getByTestId('botãoheader');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Cadastrar');
  });
});
