import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import App from './App';

test('advice is fetched on click of button', async () => {
  render(<App />);

  const adviceButton = screen.getByRole("button")

  //button click
  await userEvent.click(adviceButton)

  // expect(adviceButton).toHaveReturned(data);
});
