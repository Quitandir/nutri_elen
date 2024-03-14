import styled from 'styled-components';
import { CustomView } from '../../styles/GlobalStyles';

export const StyledService = styled(CustomView)`
    width: 100vw;
    margin: 100px auto;
    gap: 24px;

    @media screen and (max-width: 430px) {
       margin: 0 auto 100px;
    }
    
   
`

export const StyledTopic = styled(CustomView)`
    flex-direction: row;
    gap: 50px;
    width: 80%;
    justify-content: flex-start;
    padding: 24px;
    border: solid pink;
    border-radius: 20px;

    @media screen and (max-width: 430px) {
        flex-direction: column;
    }
`

export const StyledImage = styled.img`
    width: 100px;
    height: auto;

    @media screen and (max-width: 430px) {
        display: none;
    }
`

export const StyledBoard = styled.img`
    width: 600px;
    height: auto;

    @media screen and (max-width: 430px) {
        width: 90%;
    }
`