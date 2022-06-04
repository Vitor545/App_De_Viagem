import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Home from '../page/Home';

const messageDescription = 'Se sua vontade é viajar sem complicações você encontrou o lugar certo, vamos te levar a lugares inesquecíveis.'

describe('Testa se Home é renderizado corretamente', () => {
  test('Verifica se Home tem um titulo', () => {
    render(<Home />);
    const tituloElement = screen.getByTestId('home_title');
    expect(tituloElement).toBeInTheDocument();
    expect(tituloElement).toHaveTextContent('Encontre Os melhores lugares Para se visitar');
  });

  test('Verifica se Home tem uma descrição', () => {
    render(<Home />);
    const descriptionElement = screen.getByTestId('home_description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(messageDescription);
  });

  test('Verifica se Home tem um input', () => {
    render(<Home />);
    const inputElement = screen.getByTestId('home_input');
    expect(inputElement).toBeInTheDocument();
  });

  test('Verifica se Home tem uma imagem', () => {
    render(<Home />);
    const imgElement = screen.getByTestId('home_img');
    expect(imgElement).toBeInTheDocument();
  });

  test('Verifica se Home tem um botão', () => {
    render(<Home />);
    const buttonElement = screen.getByTestId('home_button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Buscar');
  });

});
