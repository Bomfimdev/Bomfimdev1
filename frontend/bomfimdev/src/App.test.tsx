import { render, screen } from '@testing-library/react';
import App from './App';

test('mostra o titulo da agencia', () => {
  render(<App />);
  expect(screen.getByText(/Bomfimdev/i)).toBeInTheDocument();
});
