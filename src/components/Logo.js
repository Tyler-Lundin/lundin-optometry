import React from 'react'
import styled from 'styled-components'
import C from '../colors'
const Logo = () => {
  return (
    <S.LogoContainer>
        <S.LogoTop>
            LUNDIN
        </S.LogoTop>
        <S.LogoBottom>
            OPTOMETRY
        </S.LogoBottom>
    </S.LogoContainer>
  )
}

export default Logo

const S = {}

S.LogoContainer = styled.div`
    font-family: 'le havre';
    text-align: center;
    display: grid;
    justify-items: center;
    color: ${C.Dark};
`
S.LogoTop = styled.div`
    font-weight: bold;
    letter-spacing: 1rem;
    transform: translateX(1%);
    margin-bottom: -4%;
    @media (max-width: 480px) { /* phone */
        font-size: 19vw;
    }
    @media (min-width: 481px) and (max-width: 768px) { /* tablet */
        font-size: 17vw;
    }
    @media (min-width: 769px) and (max-width: 1024px) { /* laptop */
        font-size: 15vw;
    }
    @media (min-width: 1025px) and (max-width: 1200px){ /* desktop */
        font-size: 14vw;
    }
    @media (min-width: 1201px) { /* big screens */
        font-size: 11vw;
    }
`

S.LogoBottom = styled.div`
    @media (max-width: 480px) { /* phone */
        font-size: 17vw;
    }
    @media (min-width: 481px) and (max-width: 768px) { /* tablet */
        font-size: 15vw;
    }
    @media (min-width: 769px) and (max-width: 1024px) { /* laptop */
        font-size: 13vw;
    }
    @media (min-width: 1025px) and (max-width: 1200px){ /* desktop */
        font-size: 12vw;
    }
    @media (min-width: 1201px) { /* big screens */
        font-size: 9vw;
    }
    
`