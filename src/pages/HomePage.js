import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import C from '../colors'// colors
import AboutUs from './AboutUs'
import {AiFillEye} from 'react-icons/ai'
import { infoHover } from '../keyframes'
const HomePage = () => {
  const [showInfo, setShowInfo] = useState(true)
  return (
    <>
      {/* HERO */}
      <S.HomePage>
        <S.Hero id='HomePage-Hero'>
          <div>
            <Logo/>
            <S.Address> 1221 S Hayford Rd, <br/> Spokane, WA 99224 </S.Address>
          </div>
          <S.CTA onClick={() => window.open('https://drbrucelundin.itrust.io/appointment')}>SCHEDULE EXAM</S.CTA>
          <S.SmallMessage>Inside the Walmart Vision Center</S.SmallMessage>
        </S.Hero>
      </S.HomePage>
      {/* SECTION 1 */}
      
      <AboutUs/>
    </>
  )
}

export default HomePage

const S = {}

// SECTION 1
S.About = styled.div``

// HERO
S.SmallMessage = styled.h3`
  width: 100vw;
  position: absolute;
  top: 2%;
  font-family: 'Bio Sans';
  font-style: italic;
  color: ${C.Secondary};
  text-align: center;
`
S.CTA = styled.button`
  width: fit-content;
  padding: 1rem;
  border: none;
  border-radius: none;
  font-family: 'Roboto Condensed';
  font-weight: 700;
  background: ${C.Secondary};
  font-size: 2.5vh;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  transition: 200ms;
  border-radius: 5px;
  :hover {
    filter: invert();
  }
`
S.Hero = styled.div`
  width: 100vw;
  height: 90vh;
  background: ${C.Primary};
  display: grid;
  align-items: center;
`
S.Address = styled.div`
  font-family: 'Roboto Mono';
  font-weight: 300;
  text-align: center;
  margin-bottom: 8vh;
  @media (max-width: 480px) { /* phone */
        font-size: 5vw;
    }
    @media (min-width: 481px) and (max-width: 768px) { /* tablet */
        font-size: 3vw;
    }
    @media (min-width: 769px) and (max-width: 1024px) { /* laptop */
        font-size: 2vw;
    }
    @media (min-width: 1025px) and (max-width: 1200px){ /* desktop */
        font-size: 2vw;
    }
    @media (min-width: 1201px) { /* big screens */
        font-size: 1.5vw;
    }
`
S.DividerLine = styled.div`
  height: 1px;
  background: black;
  margin: auto;
  @media (max-width: 480px) { /* phone */
        width: 60vw;
    }
    @media (min-width: 481px) and (max-width: 768px) { /* tablet */
        width: 50vw;
    }
    @media (min-width: 769px) and (max-width: 1024px) { /* laptop */
        width: 40vw;
    }
    @media (min-width: 1025px) and (max-width: 1200px){ /* desktop */
        width: 30vw;
    }
    @media (min-width: 1201px) { /* big screens */
        width: 25vw;
    }
`
S.HomePage = styled.div`
  width: 100vw;
  min-height: 90.5vh;
  display: grid;
  background: ${C.Secondary};
`