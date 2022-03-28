import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import App from './App';

test('upon clicking the advice button, a new advice is displayed', () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  
  expect(linkElement).toBeInTheDocument();
});
