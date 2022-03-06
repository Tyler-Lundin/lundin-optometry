import styled from 'styled-components'
import C from './../util/colors'
import {IoIosPhonePortrait} from 'react-icons/io'
var d = new Date(); 
const currentYear = d.getFullYear(); 
const Footer = () => {

    return (
    <footer>
        <S.Footer id='footer'>
            <S.PhoneNumberContainer>
                <IoIosPhonePortrait size={'100%'}/>
                <S.PhoneNumber href='tel:5094590619'>(509)459-0619</S.PhoneNumber>
            </S.PhoneNumberContainer>
            <S.Copyright><small>&copy; Copyright {currentYear}, Bruce Lundin O.D. LLC</small></S.Copyright>
        </S.Footer>
    </footer>
    )
}


export default Footer

const S = {}

S.Copyright = styled.h4`
    font-family: 'roboto-condensed';
`
S.PhoneNumber = styled.a`
    all: unset;
    font-size: 1rem;
    font-family: 'roboto-condensed';
    white-space: nowrap;
`
S.PhoneNumberContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    height: 1rem;
    width: fit-content;
    :hover{
        cursor: pointer;
        color: ${C.Primary};
    }
`
S.Footer = styled.div`
    color: white;
    width: 100vw;
    height: 10vh;
    background: ${C.Logo};
    position: relative;
    bottom: 0;
    align-items: center;
    justify-items: center;
    display: grid;
    grid-auto-flow: row;
`