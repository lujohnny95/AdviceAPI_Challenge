import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Fetch Advice API', () => { 

  test("tests data is fetched when the button clicked", async () => {
    render( <App /> );
    //querying the elements:
    const adviceTextElement = await screen.findByTestId(/advice-text/i);
    const adviceID = await screen.findAllByTestId(/advice-ID/i);
    const buttonElement = screen.getAllByRole("button");
    //user click event:
    fireEvent.click(buttonElement);
    //assertion, expected outcome: 
    expect(adviceTextElement).toBeInTheDocument();
    expect(adviceID).toBeInTheDocument();
  })

})