import { CustomDiv, StyledFooter, StyledImg } from "./styles";
import logo from '../../../public/logo2.webp'
import { Text } from "../../styles/GlobalStyles";
import { EnvelopeSimple, InstagramLogo, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
    return (
        <StyledFooter>
            <StyledImg src={logo.src} alt="logo" />
            <CustomDiv>
                <Text color="white" style={{display:'flex', gap:'24px'}}><EnvelopeSimple size={24} color="#ffffff" />nutri.elenrame@gmail.com</Text>
                <Text color="white" style={{display:'flex', gap:'24px'}}><Phone size={24} color="#ffffff" />51 989768735</Text>
                <Text color="white" style={{display:'flex', gap:'24px'}}><InstagramLogo size={24} color="#ffffff" />@nutri.elenrame</Text>
                <Text color="white" style={{display:'flex', gap:'24px'}}><MapPin size={24} color="#ffffff" />Canoas, RS - Brasil</Text>
            </CustomDiv>
        </StyledFooter>
    )
}