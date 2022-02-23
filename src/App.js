import styled from 'styled-components'
import Nav from './components/Nav/Nav';

const S = {}

S.App = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <S.App>
      <Nav/>
    </S.App>
  );
}

export default App;
