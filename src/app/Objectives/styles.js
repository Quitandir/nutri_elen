import styled from 'styled-components';
import { CustomView } from '../../styles/GlobalStyles';


export const StyledObjectives = styled(CustomView)`
    width: 90%;
    margin: 100px auto;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;

    @media screen and (max-width: 430px) {
       margin-bottom: 50px;
    }

`

