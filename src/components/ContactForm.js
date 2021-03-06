import styled from 'styled-components'
import C from '../util/colors'
import ReCAPTCHA from "react-google-recaptcha"
import { useState } from 'react'
import { useEffect } from 'react'
import submitForm from '../util/submitForm'

const ContactForm = (props) => {
    const [disableSubmit,setDisableSubmit] = useState(true);
    const [load, setLoad] = useState(false)

    const handleSubmit = (e) => {
        const formData =  new FormData(e.target)
        const finalData = []
        props.setMessageSent(true)
        e.preventDefault()
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
            finalData.push(value)
        }
        setDisableSubmit(true)
        submitForm(finalData[0], finalData[1], finalData[2])

    }
    const handleChange = () => {
        setDisableSubmit(false)
    }
    useEffect( () => {
        setTimeout(() => {
            setLoad(true)
        }, 1000)
    }, [] )

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.NameSection>
                <S.Label htmlFor='name_input'>NAME</S.Label>
                <S.Input id='name_input' type='text' name='name' required/>
            </S.NameSection>

            <S.SenderSection>
                <S.Label htmlFor='email_input'>EMAIL</S.Label>
                <S.Input id='email_input' type='email' name='email' required/>
            </S.SenderSection>

            <S.MessageSection id='MessageSection'>
                <S.Label htmlFor='message_input'>MESSAGE</S.Label>
                <S.MessageInput id='message_input' type='text' name='message' rows={12} required/>
            </S.MessageSection>
            <S.SendContainer>
                {
                    disableSubmit ?
                    load && (
                        <ReCAPTCHA
                        sitekey="6LdtdLgeAAAAAGZJbOd8atEuTKBnwejtXef-sjjL"
                        onChange={handleChange}
                        />
                    ) 
                    :
                    <S.Send type='submit' disabled={disableSubmit}>SEND</S.Send>
                }
                
            </S.SendContainer>
            
        </S.Form> 
    )
}
// 

export default ContactForm

const S = {}
S.SendContainer = styled.div`
    display: grid;
    grid-auto-flow:column ;
`
S.Send = styled.button`
    all: unset;
    background: ${C.Primary};
    color: ${C.Dark};
    padding: .5rem;
    font-size: 150%;
    font-family: 'bio-sans';
    text-align: center;
    :focus{
      outline: red 3px solid;
    }
`

S.Form = styled.form`
    width: 80vw;
    margin: auto;
    display: grid;
`
S.MessageInput = styled.textarea`
    resize: none;
    width: 100%;
    border: none;
    font-size: 1.5rem;
    justify-self: center;

`
S.Input = styled.input`
    width: 100%;
    border: none;
    font-size: 1.5rem;
    justify-self: center;

`
S.Label = styled.label`
    font-family: 'roboto-condensed';
    text-align: left;
    color: ${C.Secondary};

`
S.NameSection = styled.div`
    display: grid;
`
S.SenderSection = styled.div`
    display: grid;
`
S.MessageSection = styled.div`
    display: grid;
`