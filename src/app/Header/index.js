import { CustomDiv, CustomLogoName, CustomText, StyledHeader, StyledImg } from "./styles";
import logo from '../../../public/logo2.webp'
import { Text } from "../../styles/GlobalStyles";
import logoName from './assets/logoName.webp'

export default function Header() {
    return (
        <StyledHeader>
            <StyledImg src={logo.src} alt="logo" />
            <CustomDiv>
                <CustomLogoName src={logoName.src   } alt='Elen Rame' />
                <CustomText color="var(--off-white)" size='30px' style={{letterSpacing: '7px'}}>
                &#x2022; NUTRICIONISTA &#x2022;
                </CustomText>
                <Text color="var(--off-white)" size='24px' align="center">
                    nutrição inteligente
                </Text>
            </CustomDiv>
        </StyledHeader>
    )
}