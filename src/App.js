import { Wrapper, Container, AdviceCard } from './App.styles';
import { ButtonIcon, DesktopDivider, MobileDivider } from './assets/graphics';
import { useQuery } from 'react-query';
import './App.css';

const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  return response.json();
};

const App = () => {
  const { data, status, refetch } = useQuery("advice", fetchAdvice, {
    manual: true,
  });
  console.log(data)

  return (
    <>
      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error fetching data...</div>}

      {status === "success" && (
        <Wrapper>
          <Container>
            <AdviceCard>
              <h4 className="advice-header" data-testID="advice-ID">ADVICE #{data.slip.id}</h4>
              <h2 className="advice-text" data-testID="advice-text">"{data.slip.advice}"</h2>
              <DesktopDivider />
              <MobileDivider />
            </AdviceCard>
              <ButtonIcon refetch={refetch} />
          </Container>
        </Wrapper>
      )}
    </>
  );
}

export default App;
