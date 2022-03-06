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
                    <S.SectionTitle color={C.Primary}>Insurance We Accept</S.SectionTitle>
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
                    <S.SectionTitle color={C.Primary}>Insurance We Don't Accept</S.SectionTitle>
                    <S.List>
                        <S.ListItem>AETNA</S.ListItem>
                        <S.ListItem>LOREM</S.ListItem>
                        <S.ListItem>IPSUM</S.ListItem>
                        <S.ListItem>THORO</S.ListItem>
                        <S.ListItem>FREYA</S.ListItem>
                        <S.ListItem>FLOKI</S.ListItem>
                        <S.ListItem>ALICER</S.ListItem>
                        <S.ListItem>COUNTRY</S.ListItem>
                        <S.ListItem>SOMTIN</S.ListItem>
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
            </S.Insurance>
           
            <S.SmallMessage>
                Questions? Call us
                <PhoneNumber/>
            </S.SmallMessage>

            <S.Exam>
            <S.TitleContainer>
                <S.Title color={C.Secondary}>eye exam</S.Title>
            </S.TitleContainer>
                <S.Section dark={true}>
                    <S.SectionTitle color={'black'}>GLASSES / ROUTINE</S.SectionTitle>

                </S.Section>
                <S.Section  dark={true}>
                    <S.SectionTitle color={'black'}>CONTACTS</S.SectionTitle>

                </S.Section>

            </S.Exam>

        </S.Information>
    </S.Background>
  )
}

export default Information

const S = {}



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
    grid-template-columns: repeat(auto-fit, minmax(min(100%/3, max(64px, 100%/3)), 1fr));;
    align-items: center;
`
S.SectionTitle = styled.h3`
    font-family: 'bio-sans';
    color: ${props=>props.color};
    text-align: center;
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
    grid-template-columns: 1fr 1fr;
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
    height: 94.5vh;
    background: whitesmoke;
    display: grid;
    grid-template-rows: 1fr 30px 1fr;
`
S.Background = styled.div`
    background: ${C.Secondary};
    width: 100vw;
    height: 95vh;
    scroll-snap-align: start;
`