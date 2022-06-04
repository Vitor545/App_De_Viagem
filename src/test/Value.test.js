import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Value from '../page/Value';

const messageDescription = 'Estamos sempre prontos para ajudar, fornecendo o melhor serviço para você. Acreditamos que todos merecem viajar por um preço justo e com qualidade.'

describe('Testa se Value é renderizado corretamente', () => {
  test('Verifica se Value tem um titulo', () => {
    render(<Value />);
    const tituloElement = screen.getByTestId('titulo');
    expect(tituloElement).toBeInTheDocument();
    expect(tituloElement).toHaveTextContent('Valor Que Damos a Você.');
  });

  test('Verifica se Value tem um subtitulo', () => {
    render(<Value />);
    const subtituloElement = screen.getByTestId('subtitulo');
    expect(subtituloElement).toBeInTheDocument();
    expect(subtituloElement).toHaveTextContent('Nossos Valores');
  });

  test('Verifica se Value tem uma descrição', () => {
    render(<Value />);
    const descriptionElement = screen.getByTestId('description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(messageDescription);
  });

  test('Verifica se Value tem accordion', () => {
    render(<Value />);
    const accordionElement = screen.getByTestId('accordion');
    expect(accordionElement).not.toBeNull();
  });
});