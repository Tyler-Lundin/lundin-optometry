import styled from 'styled-components'
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
const S = {}

S.App = styled.div`
  width: 100vw;
  min-height: 100vh;
`;


function App() {
  return (
    <S.App>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </S.App>
  );
}

export default App;

