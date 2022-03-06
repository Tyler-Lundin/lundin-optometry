import React from 'react'
import {IoIosPhonePortrait} from 'react-icons/io'
import styled from 'styled-components'
import C from '../util/colors'
const PhoneNumber = () => {


  return (
    <S.PhoneNumberContainer>
        <IoIosPhonePortrait size={'90%'}/>
        <S.PhoneNumber href='tel:5094590619'>(509)459-0619</S.PhoneNumber>
    </S.PhoneNumberContainer>
  )
}

export default PhoneNumber

const S = {}

S.PhoneNumber = styled.a`
    all: unset;
    font-family: 'roboto-condensed';
    white-space: nowrap;
    color: ${C.Primary};
    :hover{
        cursor: pointer;
        color: white;
    }
`
S.PhoneNumberContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    height: 1rem;
    width: fit-content;

`