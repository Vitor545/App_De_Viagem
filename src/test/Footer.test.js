import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';

const messageDescription = 'Nossa visão é fazer com que todas as pessoas tenham a oportunidade de viajar.'

describe('Testa se Footer é renderizado corretamente', () => {
  test('Verifica se Footer tem um titulo "App de Viajem"', () => {
    render(<Footer />);
    const tituloElement = screen.getByTestId('titulo');
    expect(tituloElement).toBeInTheDocument();
    expect(tituloElement).toHaveTextContent('App de Viajem');
  });

  test('Verifica se Footer tem uma descrição', () => {
    render(<Footer />);
    const descriptionElement = screen.getByTestId('description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(messageDescription);
  });

  test('Verifica se Footer tem aba sobre', () => {
    render(<Footer />);
    const descriptionElement = screen.getByTestId('sobre');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent('SobreSobre NósRecursosNotícias e Blogs');
  });

  test('Verifica se Footer tem aba empresa', () => {
    render(<Footer />);
    const descriptionElement = screen.getByTestId('empresa');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent('EmpresaComo TrabalhamosSegurançaTrabalhe Conosco');
  });

  test('Verifica se Footer tem aba suporte', () => {
    render(<Footer />);
    const descriptionElement = screen.getByTestId('suporte');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent('SuporteCentral de SuporteFAQsEntre em Contato');
  });

  test('Verifica se Footer tem aba siga-nós', () => {
    render(<Footer />);
    const descriptionElement = screen.getByTestId('siga');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent('Siga Nós');
  });
});