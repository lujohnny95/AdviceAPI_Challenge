import { useState } from 'react';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState("");
  const [adviceID, setAdviceID] = useState("");
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
    <div className="App">
      
    </div>
  );
}

export default App;
