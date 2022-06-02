import React from 'react';
import { render, screen } from '@testing-library/react';
import Popular from '../page/Popular';

test('Verifica', () => {
  render(<Popular />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});