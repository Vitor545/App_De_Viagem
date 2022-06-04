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
    const inicioElement = screen.getByTestId('inicio');
    expect(inicioElement).toBeInTheDocument();
    expect(inicioElement).toHaveTextContent('Início');
  });

  test('Verifica se Header tem um link para a pagina Lugares', () => {
    render(<Header />);
    const lugarElement = screen.getByTestId('lugares');
    expect(lugarElement).toBeInTheDocument();
    expect(lugarElement).toHaveTextContent('Lugares');
  });

  test('Verifica se Header tem um link para a pagina Nossos Valores', () => {
    render(<Header />);
    const valoresElement = screen.getByTestId('nossosvalores');
    expect(valoresElement).toBeInTheDocument();
    expect(valoresElement).toHaveTextContent('Nossos Valores');
  });

  test('Verifica se Header tem um link para a pagina Contato', () => {
    render(<Header />);
    const contatoElement = screen.getByTestId('contato');
    expect(contatoElement).toBeInTheDocument();
    expect(contatoElement).toHaveTextContent('Contato');
  });

  test('Verifica se Header tem um botão cadastrar', () => {
    render(<Header />);
    const botaoElement = screen.getByTestId('botãoheader');
    expect(botaoElement).toBeInTheDocument();
    expect(botaoElement).toHaveTextContent('Cadastrar');
  });
});
