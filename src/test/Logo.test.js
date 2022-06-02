import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '../page/Logo';

test('Verifica', () => {
  render(<Logo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});