import { render, screen } from '@testing-library/react';
import App from './App';

test('renders The Elon Must Project!', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Elon Must Project!/i);
  expect(linkElement).toBeInTheDocument();
});
