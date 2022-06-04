import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Subscribe from '../page/Subscribe';

const messageDescription = 'Assine e encontre preço super atrativo e Contato de nós. Encontre sua passagem certa.'

describe('Testa se Subscribe é renderizado corretamente', () => {
  test('Verifica se Subscribe tem um titulo', () => {
    render(<Subscribe />);
    const tituloElement = screen.getByTestId('titulo');
    expect(tituloElement).toBeInTheDocument();
    expect(tituloElement).toHaveTextContent('Garanta Sua Passagem');
  });

  test('Verifica se Subscribe tem uma descrição', () => {
    render(<Subscribe />);
    const descriptionElement = screen.getByTestId('description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(messageDescription);
  });

  test('Verifica se Subscribe tem um botão', () => {
    render(<Subscribe />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Cadastrar');
  });
});
