import { CustomImg, CustomText, CustomTitle, StyledIntro, StyledList } from "./styles";
import introPic from './assets/introPic.webp'
import { CustomView } from "../../styles/GlobalStyles";

export default function Intro() {
    return (
        <StyledIntro width='80%'>
            
            <CustomTitle size='32px' weight='700' align='center' margin='0 0 24px 0'>
                Quantas segundas-feiras ou inícios de janeiro você já disse que ia mudar?
            </CustomTitle>
            <CustomText size='20px' weight='400' align='justify' width='100%'>
                Mas aí no caminho, te diziam que para perder peso e melhorar sua alimentação deveria
                deixar de comer as coisas que gosta, gastar rios de dinheiro com suplementos ou
                passar horas e horas na cozinha.
            </CustomText>
            <CustomText size='20px' weight='400' align='justify' width='100%'>
                Pois eu te digo que é possível <span style={{ color: "var(--pink-logo)", fontWeight:'700' }}>atingir teus objetivos sem perder o prazer e a
                    praticidade na alimentação.</span>

            </CustomText>
            <CustomText size='20px' weight='400' align='justify' width='100%'>
                Para que dessa vez não seja mais um fracasso, é necessário mudar a tua
                relação com a comida, além de fazer com que a tua dieta caiba no teu
                orçamento, na tua rotina e, acima de tudo, no teu paladar.
            </CustomText>
            <CustomView direction='row'>
                <CustomImg src={introPic.src} alt='cabeça pensando' />
                <StyledList>
                    <li>
                        <CustomText style={{ fontStyle: 'italic' }} size='20px' align='left'>
                            Você vai entender que uma nutrição inteligente adiciona alimentos e não exclui
                        </CustomText>
                    </li>
                    <li>
                        <CustomText style={{ fontStyle: 'italic' }} size='20px' align='left'>
                            Você vai aprender a fazer escolhas melhores, dosar de forma adequada a
                            frequência e quantidade de certos alimentos
                        </CustomText>
                    </li>
                    <li>
                        <CustomText style={{ fontStyle: 'italic' }} size='20px' align='left'>
                            Você vai aprender a refletir e organizar momentos da tua alimentação pensando
                            nos teus sentimentos, necessidades, família e amigos
                        </CustomText>
                    </li>
                    <li>
                        <CustomText style={{ fontStyle: 'italic' }} size='20px' align='left'>
                            Você vai descobrir que a melhor dieta é aquela que você consegue seguir para o
                            resto da vida e não algo momentâneo e insustentável

                        </CustomText>
                    </li>
                </StyledList>
            </CustomView>
            <CustomTitle style={{ fontStyle: 'italic' }} size='30px' weight='700' align='center' margin='24px 0 0 0'>
                Porque vamos construir esse plano juntas, fazendo com que ele não
                te prenda, mas te traga LIBERDADE!
            </CustomTitle>


        </StyledIntro >
    )
}