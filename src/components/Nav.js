import styled, {keyframes} from 'styled-components'
import {IoIosMenu, IoIosClose} from 'react-icons/io'
import { useState } from 'react'
import C from './../util/colors'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    function handleToggle() {
        setIsMenuOpen(!isMenuOpen)
    }
    const handleLink = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <S.NavContainer isMenuOpen={isMenuOpen}>
        <S.ToggleOpen onClick={()=>handleToggle()}>
                <IoIosMenu size={'100%'}/>
        </S.ToggleOpen>
        <S.Nav isMenuOpen={isMenuOpen}>
            <S.ToggleOpen onClick={()=>handleToggle()}>
                <IoIosClose size={'100%'} color='white'/>
            </S.ToggleOpen>
            <S.LinksContainer>
                <S.ListItem>
                    <a href='#HomePage' onClick={handleLink}>HOME</a>
                </S.ListItem>

                <S.ListItem>
                <span onClick={()=>window.open('https://drbrucelundin.itrust.io/appointment')}>SCHEDULE VISIT</span>
                </S.ListItem>

                <S.ListItem>
                    <a href='#ContactUs' onClick={handleLink}>CONTACT US</a>
                </S.ListItem>

                <S.ListItem>
                    <a href='#AboutUs' onClick={handleLink}>ABOUT US</a>
                </S.ListItem>
            </S.LinksContainer>
        </S.Nav>
    </S.NavContainer>
  )
}

export default Nav

const S = {}
const toggleSize = '7vh'
const togglePadding = '2vw'
// Animations
const openNav = keyframes`
    from {
        transform: translateX(-110%);
    }
    to {
        transform: translateX(0%);
    }
`
const closeNav = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-110%);
    }
`
// MOBILE
S.Nav = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${C.Secondary};
    color: ${C.Primary};
    position: fixed;
    z-index: 100;
    animation: ${props=>props.isMenuOpen?closeNav:openNav} 1s normal forwards;
`
S.ToggleOpen = styled.div`
    width: ${toggleSize};
    height: ${toggleSize};
    position: fixed;
    top: ${togglePadding};
    right: ${togglePadding};
    z-index: 100;

`
S.LinksContainer = styled.ul`
    height: 90%;
    display: grid;
    font-family: 'Le Havre';
    align-items: center;
    @media (max-width: 480px) { /* phone */
        font-size: 3vh;
    }
    @media (min-width: 481px) and (max-width: 768px) { /* tablet */
        font-size: 4vh;
    }
    @media (min-width: 769px) and (max-width: 1024px) { /* laptop */
        font-size: 5vh;
    }
    @media (min-width: 1025px) and (max-width: 1200px){ /* desktop */
        font-size: 6vh;
    }
    @media (min-width: 1201px) { /* big screens */
        font-size: 6vh;
    }
`
S.ListItem = styled.li`
    text-align:center ;
    a {
        all: unset;
    }
    ::before {
        content: '→';
        color: ${C.Primary};
        position: relative;
        z-index: 200;
        position: absolute;
        transform: translateX(-110%);
        opacity: 0;
        transition: 250ms;
    }
    ::after {
        content: '←';
        color: ${C.Primary};
        position: relative;
        z-index: 200;
        position: absolute;
        transform: translateX(10%);
        opacity: 0;
        transition: 250ms;
    }
    :hover {
        ::before, ::after {
            opacity: 1;
        }
    }
`
S.NavContainer = styled.div`
    
`