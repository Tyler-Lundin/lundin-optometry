import styled from 'styled-components'
import Footer from './components/Footer';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
const S = {}

S.App = styled.div`
  width: 100vw;
  min-height: 100vh;
`;


function App() {
  return (
    <S.App>
      <Nav/>
      <HomePage/>
      <Footer/>
    </S.App>
  );
}

export default App;

