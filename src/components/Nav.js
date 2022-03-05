import styled, {keyframes} from 'styled-components'
import {IoIosMenu, IoIosClose} from 'react-icons/io'
import { useState } from 'react'
import C from '../colors' // colors

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function handleToggle() {
        setIsMenuOpen(!isMenuOpen)
        isMenuOpen ? handleOpenNav() : handleCloseNav()
        console.log(isMenuOpen)
    }
    function handleOpenNav() {

    }
    function handleCloseNav() {

    }
  return (
    <>
        <S.ToggleOpen onClick={()=>handleToggle()}>
                <IoIosMenu size={'100%'}/>
        </S.ToggleOpen>
        <S.Nav isMenuOpen={isMenuOpen}>
            <S.ToggleOpen onClick={()=>handleToggle()}>
                <IoIosClose size={'100%'} color='white'/>
            </S.ToggleOpen>
            <S.LinksContainer>
                <S.Link>HOME</S.Link>
                <S.Link>SCHEDULE VISIT</S.Link>
                <S.Link>CONTACT US</S.Link>
                <S.Link>ABOUT US</S.Link>
            </S.LinksContainer>
        </S.Nav>
    </>
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
    animation: ${props=>props.isMenuOpen?closeNav:openNav} 1s normal forwards;
    position: absolute;
    z-index: 100;
`
S.ToggleOpen = styled.div`
    width: ${toggleSize};
    height: ${toggleSize};
    position: absolute;
    top: ${togglePadding};
    right: ${togglePadding};
`
S.LinksContainer = styled.ul`
    height: 100%;
    display: grid;
    font-family: 'Le Havre';
    align-items: center;
    @media (max-width: 480px) { /* phone */
        font-size: 6vh;
    }
    @media (min-width: 481px) and (max-width: 768px) { /* tablet */
        font-size: 6vh;
    }
    @media (min-width: 769px) and (max-width: 1024px) { /* laptop */
        font-size: 6vh;
    }
    @media (min-width: 1025px) and (max-width: 1200px){ /* desktop */
        font-size: 6vh;
    }
    @media (min-width: 1201px) { /* big screens */
        font-size: 6vh;
    }
`
S.Link = styled.li`
    text-align:center ;
`
// DESKTOP DESIGN
// S.Nav = styled.div`
//     width: 100vw;
//     height: ${navHeight};
//     background: whitesmoke;
//     position: absolute;
// `
// S.LinksContainer = styled.ul`
//     height: 100%;
//     display: grid;
//     grid-auto-flow: column;
//     list-style: none;
//     align-items:center;
//     justify-items: center;
//     font-family: 'Le Havre';
//     font-size: 1.5vw;
// `
// S.Link = styled.li`
//     height: 100%;
//     padding: 0 5px;
//     line-height: ${navHeight};
//     box-sizing: border-box;
//     :hover {
//         background: white;
//     }
// `