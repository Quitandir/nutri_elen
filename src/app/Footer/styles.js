import styled from 'styled-components';

export const StyledFooter = styled.header`
    display: flex;
    flex-direction: row;
    height: 250px;
    background-color: var(--pink-rose);
    padding: 36px;
    gap: 24px;

    @media screen and (max-width: 430px) {
        flex-direction: column;
        align-items: center;
        height: auto;
}
    

`

export const CustomDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    
`

export const StyledImg = styled.img`

    width: auto;
    height: auto;

    @media screen and (max-width: 430px) {
        width: 80px;
        height: auto;
}
`