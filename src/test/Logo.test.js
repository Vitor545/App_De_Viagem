import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logo from '../page/Logo';

describe('Testa se Logo é renderizado corretamente', () => {
  test('Verifica se Logo tem as Logos', () => {
    render(<Logo />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
  });
});