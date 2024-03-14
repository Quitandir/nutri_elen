import styled from 'styled-components';
import { Text } from '../../styles/GlobalStyles';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    height: 250px;
    background-color: var(--pink-rose);
    padding: 36px;
    gap: 24px;
    
    @media screen and (max-width: 430px) {
        flex-direction: column;
        height: auto;
        align-items: center;
    }

`
export const CustomDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

export const StyledImg = styled.img`

    width: auto;
    height: auto;

    @media screen and (max-width: 430px) {
        width: 100px;
        height: 100px;
}
`


export const CustomLogoName = styled.img`
    width: 400px;
    height: auto;

    @media screen and (max-width: 430px) {
        width: 300px;
    }
`

export const StyledSubtitle = styled.h2`
    font-size: 36px;
    color: var(--green-mint)

    @media screen and (max-width: 430px) {
        font-size: 30px;
    }
`

export const CustomText = styled(Text)`
@media screen and (max-width: 430px) {
    font-size: 20px;
    margin-top: 12px;
    text-align: center;
}
`