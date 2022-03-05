import styled from 'styled-components'
import C from '../colors'
import DrLundinImg from './../images/cropped.jpg'
const AboutUs = () => {



    return(
        <S.AboutUs>
            <S.MainImage>
                <img src={DrLundinImg}/>
            </S.MainImage>
            <S.AboutContainer>
                <S.Title>Dr Bruce Lundin</S.Title>
                <S.Desc>
                    Dr Bruce Lundin has been doing 
                    Optometry for 22 years!  He 
                    graduated from Pacific University 
                    College of Optometry in the year 2000.
                    Bruce is a big family man, 
                    welcoming his latest of 7 kids in 2022. 
                </S.Desc>
                <S.ContactBruce>
                    <a href="mailto:bruceeyeguy@gmail.com">bruceeyeguy@gmail.com</a>
                </S.ContactBruce>
            </S.AboutContainer>
        </S.AboutUs>
    )
}

export default AboutUs

const S = {}

S.ContactBruce = styled.div`
    font-family: 'le havre';
    font-size: 1.2rem;
    text-align: center;
    color: skyblue;
    width: fit-content;
    height: fit-content;
    a {
        text-decoration: none;
        cursor: pointer;
        :visited {

        }
        :hover{
        color: black;
    }
    }
`

S.MainImage = styled.div`
    width: 100%; /* if desktop, */
    height: 100%;
    right: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    img {
        width: 100%;
        height: 100%;
        position: center;
        object-fit: cover;
    }
`
S.Desc = styled.div`
    font-family: 'le havre';
    font-size: 2rem;
    padding: 2rem;
    text-align: center;

`
S.Title = styled.h1`
    font-family: 'roboto-condensed';
    font-size: 9vw;
    white-space: nowrap;
    text-align: center;
`
S.AboutContainer = styled.div`
    display: grid;
    justify-items: center;
`
S.AboutUs = styled.div`
    width: 100vh;
    height: 95vh;
    display: grid;
    grid-template-columns: 40vw 60vw;
    justify-items: center;
`