import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../page/Contact';

const messageDescription = 'Há algum problema em encontrar a viajem dos seus sonhos? Necessita de um guia na escolha de uma viajem? ou precisa de uma ajuda para conseguir uma passagem mais barata? basta entrar em contato conosco.'

describe('Testa se Contact é renderizado corretamente', () => {
  test('Verifica se Contact tem um titulo', () => {
    render(<Contact />);
    const tituloElement = screen.getByTestId('titulo');
    expect(tituloElement).toBeInTheDocument();
    expect(tituloElement).toHaveTextContent('Fácil de entrar em contato conosco.');
  });

  test('Verifica se Contact tem um subtitulo', () => {
    render(<Contact />);
    const subtituloElement = screen.getByTestId('subtitulo');
    expect(subtituloElement).toBeInTheDocument();
    expect(subtituloElement).toHaveTextContent('Entre em contato');
  });

  test('Verifica se Contact tem uma descrição', () => {
    render(<Contact />);
    const descriptionElement = screen.getByTestId('description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(messageDescription);
  });

  test('Verifica se Contact tem card', () => {
    render(<Contact />);
    const contactElement = screen.getAllByTestId('card_contact');
    expect(contactElement).not.toBeNull();
    expect(contactElement).toHaveLength(4);
  });
});