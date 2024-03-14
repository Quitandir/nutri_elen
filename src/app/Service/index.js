import { Text } from "../../styles/GlobalStyles";
import { StyledBoard, StyledImage, StyledService, StyledTopic } from "./styles";
import pic1 from './assets/service1.webp';
import pic2 from './assets/service2.webp';
import pic3 from './assets/service3.webp';
import pic4 from './assets/service4.webp';
import pic5 from './assets/service5.webp';
import pic6 from './assets/service6.webp';
import {WhatsappLogo} from "@phosphor-icons/react/dist/ssr";

export default function Service() {
    
    return (
        <StyledService>
            <Text size='28px' weight='700' width='100%' align='center'>
                Como funciona meu acompanhamento?
            </Text>
            <StyledTopic>
                <StyledImage src={pic1.src} alt="check list" />
                <Text align='justify'>
                    Assim que agendar a 1ª consulta
                    você receberá acesso ao meu
                    app e dois questionários pré
                    consulta para responder. Assim,
                    no dia do nosso encontro,
                    consigo otimizar nosso tempo e
                    focar no que interessa: te ouvir!
                </Text>
            </StyledTopic>
            <StyledTopic>
                <StyledImage src={pic2.src} alt="check list" />
                <Text align='justify'>
                    No nosso primeiro encontro,
                    além da nossa conversa, vou
                    fazer tua avaliação física, pra que
                    a gente consiga elaborar um
                    plano alimentar ideal pra ti.

                </Text>
            </StyledTopic>
            <StyledTopic>
                <StyledImage src={pic3.src} alt="check list" />
                <Text align='justify'>
                    Com todas essas informações em mãos, vamos estimar quantas
                    consultas serão necessárias para que você atinja e mantenha teus
                    resultados e que também consiga se organizar em relação a tempo e
                    investimento

                </Text>
            </StyledTopic>
            <StyledTopic>
                <StyledImage src={pic4.src} alt="pessoa com carrinho de mercado" />
                <Text align='justify'>
                    Ainda nessa consulta construímos esse
                    primeiro plano, juntas, e você já sai do
                    consultório com ele em mãos, assim já
                    pode passar no mercado, na feira e dar
                    o pontapé inicial na tua mudança de
                    vida.


                </Text>
            </StyledTopic>
            <StyledTopic>
                <StyledImage src={pic5.src} alt="pessoa com carrinho de mercado" />
                <Text align='justify'  >
                    Os intervalos entre as
                    consultas também serão
                    individualizados pensando
                    nas tuas necessidades e
                    condições.


                </Text>
            </StyledTopic>
            <StyledBoard src={pic6.src} alt='quadro' />
            <Text size='28px' width='70%' align='center' margin='24px 0'>
                Você vai ganhar uma vida <span style={{ color: 'var(--pink-logo)', fontWeight:'700' }}>mais leve</span>, se sentir <span style={{ color: 'var(--pink-logo)', fontWeight:'700' }}>bem</span> com seu corpo e mente, usar a alimentação a <span style={{ color: 'var(--pink-logo)', fontWeight:'700' }}>seu favor</span> e estar no <span style={{ color: 'var(--pink-logo)', fontWeight:'700' }}>controle</span> das suas escolhas!

            </Text>

            <Text size='28px' width='70%' weight='700' margin='24px 0' align='center'>
                Quer saber mais informações?
            </Text>

            <Text size='28px' width='70%' align='center' margin='24px 0'>
               Clique aqui abaixo e vamos conversar no whatsapp!

            </Text>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/5551989768735">
                <WhatsappLogo size={96} color="#25d366" weight="fill" />
            </a>
        </StyledService>
    )
}