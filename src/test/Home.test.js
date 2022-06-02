import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page/Home';

test('Verifica', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});