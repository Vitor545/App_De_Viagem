import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('Verifica', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});