import styled from 'styled-components'

const S = {}
// DESKTOP :) 
S.Nav = styled.div` 
    width: 100vw;
    height: 3rem;
    background: #49a9ea;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    justify-content: center;
    font-family: 'Bio Sans';
`;
S.Logo = styled.div`
    width: 33vw;
    height: 2.5rem;
    text-align: center;
    display: grid;
    align-items: center;
    font-weight: 700;
    font-size: 1.5rem;
`;

S.Links = styled.ul`
    display: grid;
    grid-auto-flow: column;
    list-style: none;
`;

S.Link = styled.li`

`;

const Nav = () => {



    return (
        <S.Nav id='Nav'>
            <S.Logo id='Logo'>LUNDIN OPTOMETRY</S.Logo>
            <S.Links id='Links'>
                <S.Link id='Link0'>HOME</S.Link>
                <S.Link id='Link1'>BOOK APPOINTMENT</S.Link>
                <S.Link id='Link2'>CONTACT US</S.Link>
                <S.Link id='Link3'>ABOUT US</S.Link>
            </S.Links>
        </S.Nav>
    )
}


export default Nav