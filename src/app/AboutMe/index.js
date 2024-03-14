import { CustomImageWraper, StyledAboutMe, StyledImg } from "./styles";
import aboutMePic from './aboutMePic.png';
import { CustomView, Text } from "../../styles/GlobalStyles";

export default function AboutMe() {
    return (
        <StyledAboutMe>
            <CustomImageWraper>
                <StyledImg src={aboutMePic.src} alt="foto de Elen Rame" />
                <CustomView align='left' gap='24px'>
                    <Text>Oi, me chamo <span style={{ fontWeight:'700' }}>Elen Rame!</span></Text>
                    <Text align='justify'>Como nutricionista focada em
                        emagrecimento e mudança de
                        comportamento, tenho como missão
                        ajudar as pessoas a estabelecer uma
                        relação saudável com a comida e com
                        seu corpo. Acredito em um mundo onde
                        é possível encontrar prazer na
                        alimentação sem culpa, enquanto se
                        cuida da saúde, ou seja, sem “terrorismo
                        nutricional”.</Text>
                    <Text align='justify'>Minha abordagem é eficaz e segura, pois
                        se baseia em ciência, não em achismo.
                        Além disso, trago minha experiência
                        pessoal de vida para enriquecer meu
                        trabalho. Eu mesma já enfrentei desafios
                        com meu corpo e alimentação, o que
                        me levou a buscar ajuda profissional.
                        Através dessa jornada, me apaixonei
                        pela Nutrição, pois aprendi que é
                        possível alcançar a saúde de forma
                        consistente, respeitando minha
                        individualidade e processo pessoal.
                    </Text>
                    <Text align='justify'>Após mais de uma década como professora, decidi dedicar-me à nutrição, onde encontrei
                        minha maior paixão e ver meus pacientes alcançando resultados seguindo orientações
                        realistas e prazerosas é extremamente gratificante para mim</Text>
                    <Text align='justify'>Como professora de origem, garanto uma comunicação clara e eficaz, explicando
                        detalhadamente o que é necessário para aprender e implementar mudanças saudáveis.
                    </Text>
                    <Text align='justify'>E saiba que estou aqui para acolher, entender e guiar você nessa jornada, sem julgamentos.
                        Respeito seu tempo, sua rotina e alinho minhas expectativas às suas. Juntas, vamos trabalhar
                        lado a lado para alcançar teus objetivos de forma permanente.</Text>
                </CustomView>
            </CustomImageWraper>
        </StyledAboutMe>
    )
}