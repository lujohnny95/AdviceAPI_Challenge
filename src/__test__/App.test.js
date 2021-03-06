import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Fetch Advice API', () => { 

  test("tests data is fetched when the button clicked", async () => {
    render( <App /> );
    //querying the elements:
    const adviceTextElement = await screen.findByTestId(/advice-text/i);
    const buttonElement = screen.getByRole("button");
    //user click event:
    fireEvent.click(buttonElement);
    //assertion, expected outcome: 
    expect(adviceTextElement).toBeInTheDocument();
  });
})
