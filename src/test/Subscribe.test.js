import React from 'react';
import { render, screen } from '@testing-library/react';
import Subscribe from './Subscribe';

test('Verifica', () => {
  render(<Subscribe />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
