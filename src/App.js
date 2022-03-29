import { useState } from 'react';
import { DesktopDivider, MobileDivider, ButtonIcon } from './assets/graphics';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState("Roll the dice for a new advice!");
  const [adviceID, setAdviceID] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: ""
  });

  //fetching advice data objects from the API
  const fetchAdvice = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.adviceslip.com/advice");
      if (response.status !== 200) {
        throw new Error("The API is down, please try again later!");
      }
      const data = await response.json();
      //console.log(data)
      setAdvice(data.slip.advice);
      setAdviceID(data.slip.id);
      setLoading(false);
    } catch (error) {
      setError({ error: true, message: error.message });
    }
  };
  
  if (error.error) {
    return <h1>{error.message}</h1>
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='advice-card'>
          <h4 className='advice-header' data-testid="advice-id">ADVICE #{adviceID}</h4>
          <h2 className='advice-text' data-testid="advice-text">"{advice}"</h2>
          {/* divider will render conditionally depending on screen size  */}
          <DesktopDivider />
          <MobileDivider />
        </div>
        {/* advice button */}
        <ButtonIcon fetchAdvice={fetchAdvice} />
      </div>
    </div>
  );
}

export default App;
