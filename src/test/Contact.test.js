import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../page/Contact';

test('Verifica', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
