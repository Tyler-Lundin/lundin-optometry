import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import C from './../util/colors'
import AboutUs from './AboutUs'
import Information from './Information'
import ContactUs from './ContactUs'
const HomePage = () => {
  return (
    <>
      {/* HERO */}
      <S.HomePage id='HomePage'>
        <S.Hero id='HomePage-Hero'>
          <div>
            <Logo/>
            {/* <S.Address onClick={()=>window.open('https://www.google.com/maps/dir//1221+S+Hayford+Rd+Spokane,+WA+99224/')}> 1221 S Hayford Rd <br/> Spokane, WA 99224 </S.Address> */}
          </div>
          
          <S.CTAs>
            <S.CTA onClick={() => window.open('https://drbrucelundin.itrust.io/appointment')}>SCHEDULE EXAM</S.CTA>
            <S.CTA onClick={()=>window.open('https://www.google.com/maps/dir//1221+S+Hayford+Rd+Spokane,+WA+99224/')}>DIRECTIONS</S.CTA>
            <S.AnchorCTA href='tel:5094590619'>CALL US</S.AnchorCTA>
          </S.CTAs>
          <S.SmallMessage>Inside the Walmart Vision Center</S.SmallMessage>
        </S.Hero>
        <S.RadialGradient/>
      </S.HomePage>
      {/* SECTION 1 */}
      <Information/>
      <ContactUs/>
      <AboutUs/>
    </>
  )
}

export default HomePage

const S = {}

// SECTION 1
S.CTAs = styled.div`
  position: relative;
  z-index: 20;
`
S.AnchorCTA = styled.a`
    all: unset;
    width: 100%;
    height: 100%;
    padding: 1rem;
    font-family: 'Roboto Condensed';
    font-weight: 700;
    background: ${C.Secondary};
    font-size: 2.5vh;
    z-index: 5;
    color: white;
    transition: 200ms;
    border-radius: 5px;
    display: inline-block;
    width: fit-content;
    margin: 0 10px;
    :hover {
      cursor: pointer;
      transform: translateY(-5%);
    }
`
S.CTA = styled.button`
  all: unset;
  width: fit-content;
  padding: 1rem;
  font-family: 'Roboto Condensed';
  font-weight: 700;
  background: ${C.Secondary};
  font-size: 2.5vh;
  z-index: 5;
  color: white;
  transition: 200ms;
  border-radius: 5px;
  :hover {
    transform: translateY(-5%);
  }
  margin: 0 10px;
  
`

// HERO

S.RadialGradient = styled.div`
  /* transform: rotate(180deg); */
	position: relative;
  transform: translateY(-100%);
  min-height: 700px;
  height: 90vh;
  box-shadow: 2px 2px 5px;
	background: none;
	filter: contrast(7);
	--mask: linear-gradient(red, #{rgba(#000, .2)});
	&::before {
		position: absolute;
		top: 0; right: 0; bottom: 0; left: 0;
		background: 
			/* radial-gradient(orange, transparent) 0 0/ 1em 1em space; */
      repeating-radial-gradient(circle, rgba(0,0,0,.05) 10px, transparent 80px);
		-webkit-mask: var(--mask);
						mask: var(--mask);
		content: ''
	}

`
S.SmallMessage = styled.h5`
  width: 100vw;
  position: absolute;
  top: 2%;
  font-family: 'Bio Sans';
  font-style: italic;
  color: ${C.Secondary};
  text-align: center;
`

S.Hero = styled.div`
  width: 100vw;
  min-height: 700px;
  height: 90vh;
  background: ${C.Primary};
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-items: center;
  align-content: space-evenly;
`
S.Address = styled.div`
  font-family: 'Roboto Mono';
  font-weight: 300;
  text-align: center;
  margin-bottom: 8vh;
  position: relative;
  z-index: 60;
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
  min-height: 700px;
  height: 90.5vh;
  display: grid;
  background: ${C.Secondary};
  scroll-snap-align: start;
`