import styled from 'styled-components'


const FormDisabled = () => {
    
    return (
        <S.FormDisabled>
            MESSAGE<br/>DELIVER<br/>SUCCESS<br/>😁
        </S.FormDisabled>
    )
}

export default FormDisabled

const S = {}

S.FormDisabled = styled.div`
    width: 100%;
    height: 80%;
    font-family: 'bio-sans';
    font-size: 5rem;
    text-align: center;
    display: grid;
    align-items: center;
`