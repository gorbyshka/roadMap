import styled, { createGlobalStyle } from 'styled-components';
import { RoadMap } from './RoadMap';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    margin: 0; 
  }
`;

const Wrapper = styled.div`
   margin-top: 100px;
`;

function App() {

  return (
    <>

      <GlobalStyle />

      <Wrapper>

        <RoadMap />

      </Wrapper>

      <Wrapper />

    </>

  );

}

export default App;
