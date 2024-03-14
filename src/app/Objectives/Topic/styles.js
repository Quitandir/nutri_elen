import styled from "styled-components"
import { CustomView, Text } from "../../../styles/GlobalStyles"

export const StyledObjectivesTopic = styled(CustomView)`
    flex-direction: row;
    padding: 12px;
    @media screen and (max-width: 430px) {
        padding: 24px;
`

export const StyledImage = styled.img`
    width: 200px;
    height: auto;

    @media screen and (max-width: 430px) {
        width: 80px;
    }
`

export const TextContainer = styled(CustomView)`
    width: 300px;
    @media screen and (max-width: 430px) {
        width: 250px;
        gap: 12px;
    }

`

export const CustomTitle = styled(Text)`
    @media screen and (max-width: 430px) {
        font-size: 14px;
    }
`

export const CustomText = styled(Text)`
    @media screen and (max-width: 430px) {
        font-size: 14px;
        text-align: justify;
    }
`