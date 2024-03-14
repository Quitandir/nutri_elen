import styled from 'styled-components';
import { CustomView, Text } from '../../styles/GlobalStyles';

export const StyledIntro = styled(CustomView)`
    margin: 100px auto;
    gap: 36px;

    @media screen and (max-width: 430px) {
        gap: 20px;
    }
`

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;

    & li {
        padding-left: 100px;
        

        @media screen and (max-width: 430px) {
            padding-left: 0;
    }
        
    }
`

export const CustomTitle = styled(Text)`
@media screen and (max-width: 430px) {
        font-size: 24px;
}
`

export const CustomText = styled(Text)`
@media screen and (max-width: 430px) {
        font-size: 16px;
}
`

export const CustomImg = styled.img`

width: 20%;
height: auto;

@media screen and (max-width: 430px) {
    display: none;
}
`