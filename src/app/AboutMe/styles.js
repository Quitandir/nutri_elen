import styled from "styled-components";
import { CustomView } from "../../styles/GlobalStyles";

export const StyledAboutMe = styled(CustomView)`

    margin: 100px auto;
    gap: 24px;
    background-color: var(--pink-background);
    padding: 100px 200px;

    @media screen and (max-width: 430px) {
        padding: 36px;
    }
`

export const CustomImageWraper = styled(CustomView)`
    flex-direction: row;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
    
`

export const StyledImg = styled.img`
    width: 50%;
    height: auto;

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin-bottom: 24px;
    }
`