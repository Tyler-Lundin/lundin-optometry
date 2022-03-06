import styled from 'styled-components'
import ContactForm from '../components/ContactForm'
import C from './../util/colors'
import { useState } from 'react'
import FormDisabled from '../components/FormDisabled'

const ContactUs = () => {
    const [messageSent, setMessageSent] = useState(false)

    return (
        <S.Background id='ContactUs'>
            <S.ContactUs>
                <S.TitleContainer>
                    <S.Title>CONTACT US</S.Title>
                </S.TitleContainer>
                {
                    messageSent ?
                    <FormDisabled/>
                    :
                    <ContactForm setMessageSent={setMessageSent}/>
                }

            </S.ContactUs>
        </S.Background>
    )
}

export default ContactUs

const S = {}


S.Title = styled.h1`
    font-family: 'Bio Sans';
`
S.TitleContainer = styled.div`
    width: 100vw;
    text-align: center;
    padding-top: 1rem;
`
S.ContactUs = styled.div`
    width: 100vw;
    min-height: 696px;
    height: 94.5vh;
    background: whitesmoke;
`

S.Background = styled.div`
    background: ${C.Secondary};
    width: 100vw;
    min-height: 700px;
    height: 95vh;
    scroll-snap-align: start;
`