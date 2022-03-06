import styled from 'styled-components'
import PhoneNumber from '../components/PhoneNumber'
import C from './../util/colors'
const Information = () => {
  return (
    <S.Background  id='info'>
        <S.Information>
            <S.Insurance>
            <S.TitleContainer>
                <S.Title color={'white'}>insurance</S.Title>
            </S.TitleContainer>
                <S.Section>
                    <S.SectionTitle color={C.Primary}>Accepted</S.SectionTitle>
                    <S.List>
                        <S.ListItem>TRICARE</S.ListItem>
                        <S.ListItem>MEDICARE</S.ListItem>
                        <S.ListItem>MEDICAID</S.ListItem>
                        <S.ListItem>DAVIS</S.ListItem>
                        <S.ListItem>AETNA</S.ListItem>
                        <S.ListItem>LOREM</S.ListItem>
                        <S.ListItem>IPSUM</S.ListItem>
                        <S.ListItem>THORO</S.ListItem>
                        <S.ListItem>FREYA</S.ListItem>
                        <S.ListItem>FLOKI</S.ListItem>
                        <S.ListItem>ALICER</S.ListItem>
                        <S.ListItem>COUNTRY</S.ListItem>
                        <S.ListItem>SOMTIN</S.ListItem>
                    </S.List>
                </S.Section>
                <S.Section>
                    <S.SectionTitle color={C.Primary}>Not Accept</S.SectionTitle>
                    <S.List>
                        <S.ListItem>AETNA</S.ListItem>
                        <S.ListItem>LOREM</S.ListItem>
                        <S.ListItem>IPSUM</S.ListItem>
                        <S.ListItem>THORO</S.ListItem>
                    </S.List>
                </S.Section>
            </S.Insurance>
           
            <S.SmallMessage>
                Questions? Call us
                <PhoneNumber/>
            </S.SmallMessage>

            <S.Exam>
            <S.TitleContainer>
                <S.Title color={C.Secondary}>eye exam</S.Title>
            </S.TitleContainer>
                <S.Section1 dark={true}>
                    <S.Rows>
                        <S.Row>
                            <S.RowTitle>BASIC EYE EXAM</S.RowTitle>
                            $100.00
                            {/* | description of servicedescription of service | FOR GLASSES  */}
                        </S.Row>
                        <S.Row>
                            <S.RowTitle>STANDARD CONTACT LENS EXAM</S.RowTitle>
                            $145.00
                            {/* | description of service | FOR CONTACT LENS and GLASSES */}
                        </S.Row>
                        <S.Row>
                            <S.RowTitle>SPECIAL CONTACT LENS EXAM</S.RowTitle>
                            $175.00
                            {/* | ROUTINE EYE EXAM | FOR SPECIAL CONTACT LENS and GLASSES */}
                        </S.Row>
                    </S.Rows>
                </S.Section1>
            </S.Exam>

        </S.Information>
    </S.Background>
  )
}

export default Information

const S = {}

S.Rows = styled.div`
    display: grid;
    width: 100%;
    justify-content: center;
    justify-items:center ;
`
S.Row = styled.div`
    width: fit-content;
    text-align: center;
    font-size: 1.2rem;
    font-family: 'le-havre';
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
`
S.RowTitle = styled.div`
    width: fit-content;
    font-family: 'roboto-condensed';
    height: 2rem;
    font-size: 1.5rem;
    justify-self: right;
`

S.SmallMessage = styled.div`
    font-family: 'roboto-condensed';
    color: white;
    width: 100%;
    background: ${C.Dark};
    text-align: right;
    display: grid;
    grid-auto-flow:column ;
    align-items: start;
    padding-top: 3px;
`
S.ListItem = styled.li`
    @media (max-width: 480px) { /* phone */
        font-size: 70%;
    }
    @media (min-width: 481px) and (max-width: 768px) { /* tablet */
        font-size: 80%;
    }
    @media (min-width: 769px) and (max-width: 1024px) { /* laptop */
        font-size: 90%;
    }
    @media (min-width: 1025px) and (max-width: 1200px){ /* desktop */
        font-size: 100%;
    }
    @media (min-width: 1201px) { /* big screens */
        font-size: 100%;
    }
`
S.List = styled.ul`
    list-style: none;
    font-family: 'le-havre';
    color: white;
    text-align: center;
    margin: auto;
    display: grid;
    height: 50%;
    width: 80%;
    align-items: center;
    @media (max-width: 480px) { /* phone */
        grid-template-columns: repeat(auto-fit, minmax(min(100%/1, max(64px, 100%/2)), 1fr));;
    
    }
    @media (min-width: 481px) and (max-width: 768px) { /* tablet */
        grid-template-columns: repeat(auto-fit, minmax(min(100%/1, max(64px, 100%/2)), 1fr));;

    }
    @media (min-width: 769px) and (max-width: 1024px) { /* laptop */
        grid-template-columns: repeat(auto-fit, minmax(min(100%/3, max(64px, 100%/3)), 1fr));
        
    }
    @media (min-width: 1025px) and (max-width: 1200px){ /* desktop */
        grid-template-columns: repeat(auto-fit, minmax(min(100%/3, max(64px, 100%/3)), 1fr));
        
    }
    @media (min-width: 1201px) { /* big screens */
        grid-template-columns: repeat(auto-fit, minmax(min(100%/3, max(64px, 100%/3)), 1fr));

    }
`
S.SectionTitle = styled.h3`
    font-family: 'bio-sans';
    color: ${props=>props.color};
    text-align: center;
`
S.Section1 = styled.div`
    width: 90%;
    height: 60%;
    background: rgba(0,0,0,0.1);
    align-self: center;
    justify-self: center;
    display: grid;
    align-items: center;
    position: relative;
    overflow-y: auto;
`
S.Section = styled.div`
    width: 90%;
    height: 60%;
    background: rgba(0,0,0,0.1);
    align-self: center;
    justify-self: center;
    display: grid;
    grid-template-rows: 50px 1fr;
    align-items: center;
    position: relative;
    overflow-y: auto;
`

S.Exam = styled.div`
    width: 100vw;
    height: 100%;
    background: 'white';
    display: grid;
`
S.Insurance = styled.div`
    width: 100vw;
    height: 100%;
    background: ${C.Secondary};
    display: grid;
    grid-template-columns: 1fr 1fr;
`
S.Title = styled.h1`
    font-family: 'le-havre';
    color: ${props=>props.color};
    width: fit-content;
`
S.TitleContainer = styled.div`
    padding-top: 1rem;
    position: absolute;
    left: 3%;
    /* right: 50%;
    transform: translateX(50%); */
`
S.Information = styled.div`
    width: 100vw;
    min-height: 696px;
    height: 94.5vh;
    background: whitesmoke;
    display: grid;
    grid-template-rows: 1fr 30px 1fr;
`
S.Background = styled.div`
    background: ${C.Secondary};
    width: 100vw;
    min-height: 700px;
    height: 95vh;
    scroll-snap-align: start;
`