import { useState } from 'react';
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
          <h4 className='advice-header'>ADVICE #{adviceID}</h4>
          <h2 className='advice-text'>"{advice}"</h2>
          {/* divider will render conditionally depending on screen size  */}
          <div className='divider-desktop'>
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </div>
          <div className='divider-mobile'>
            <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                <g transform="translate(138)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        {/* advice button */}
        <button className='advice-btn' onClick={fetchAdvice}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
