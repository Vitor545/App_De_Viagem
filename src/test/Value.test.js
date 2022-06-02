import React from 'react';
import { render, screen } from '@testing-library/react';
import Value from '../page/Value';

test('Verifica', () => {
  render(<Value />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
