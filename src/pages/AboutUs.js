import styled from 'styled-components'
import C from './../util/colors'
import DrLundinImg from './../images/cleanedupErasedEdges.png'
const AboutUs = () => {



    return(
        <S.Background id='AboutUs' >
            <S.AboutUs>
                <S.Heading>about</S.Heading>
                <S.MainImage>
                    <img src={DrLundinImg} alt='Pic of Dr Lundin'/>
                </S.MainImage>

                <S.AboutContainer>
                    <S.Title><span>Dr </span><span id='brucelundintitle'>Bruce<br/>Lundin</span></S.Title>
                    <S.Desc>
                        Bruce Lundin has been doing 
                        Optometry for 22 years, graduating from Pacific University 
                        College of Optometry in the year 2000.
                        Bruce is a big family man, 
                        welcoming his latest of 7 kids in 2022. 
                    </S.Desc>
                    <S.ContactBruce>
                        <a href="mailto:bruceeyeguy@gmail.com">Email Dr Lundin</a>
                    </S.ContactBruce>
                </S.AboutContainer>

            </S.AboutUs>
        </S.Background>

    )
}

export default AboutUs

const S = {}

S.ContactBruce = styled.div`
    font-family: 'le-havre';
    font-size: 1.2rem;
    justify-self: right;
    text-align: right;
    color: skyblue;
    width: fit-content;
    height: fit-content;
    max-width: 70%;
    background: ${C.Primary};
    :hover{
        opacity: .5;
    }
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${C.Secondary};
        
    }
`

S.MainImage = styled.div`
    width: 100%; /* if desktop, */
    height: 100%;
    right: 0;
    display: flex;
    justify-content: center;
    overflow-x: visible;
    img {
        /* width: 100%; */
        height: 94.5vh;
        /* position: center; */
        /* object-fit: cover; */
    }
`
S.Desc = styled.div`
    font-family: 'le-havre';
    max-width: 70%;
    text-align: right;
    
`
S.Title = styled.div`
    font-family: 'roboto-condensed';
    font-size: 140%;
    height: min-content;
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    span {
        font-size: 200%;
        margin-right: 1rem;
    }
    #brucelundintitle{
        text-align: left;
        display: grid;
        line-height: 80%;
        font-size: 100%;
        margin: 0;
    }
`
S.AboutContainer = styled.div`
    position: absolute;
    width: 60vw;
    height: 80vh;
    display: grid;
    justify-items: right;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 480px) { /* phone */
        font-size: 1.3rem;
        padding: 1rem;
    }
    @media (min-width: 481px) and (max-width: 768px) { /* tablet */
        font-size: 1.7rem;
        padding: 2rem;
    }
    @media (min-width: 769px) and (max-width: 1024px) { /* laptop */
        font-size: 2rem;
        padding: 2rem;
    }
    @media (min-width: 1025px) and (max-width: 1200px){ /* desktop */
        font-size: 2rem;
        padding: 2rem;
    }
    @media (min-width: 1201px) { /* big screens */
        font-size: 2rem;
        padding: 2rem;
    }
`
S.Heading = styled.h1`
    font-family: 'le-havre';
    position: absolute;
    left: 5%;
    color: ${C.Secondary};
`
S.AboutUs = styled.div`
    width: 100vw;
    min-height: 696px;
    height: 94.5vh;
    display: grid;
    grid-template-columns: 50vw;
    justify-items: center;
    background: whitesmoke;
    position: absolute;
    overflow: hidden;
`
S.Background = styled.div`
    background: ${C.Secondary};
    width: 100vw;
    min-height: 700px;
    height: 95vh;
    scroll-snap-align: start;

`