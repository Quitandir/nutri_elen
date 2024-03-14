import { Text } from "../../styles/GlobalStyles";
import { StyledObjectives } from "./styles";
import pic1 from './assets/objective1.webp';
import pic2 from './assets/objective2.webp';
import pic3 from './assets/objective3.webp';
import pic4 from './assets/objective4.webp';
import pic5 from './assets/objective5.webp';

import Topic from "./Topic";

export default function Objectives() {
    return (
        <StyledObjectives>
            <Text size='26px' weight='700' width='100vw' align='center'>
                E como você vai <span style={{ color: 'var(--pink-logo)' }}>atingir seus objetivo</span>?
            </Text>
            <Topic
                key='1'
                pic={pic1.src}
                title='ESCUTA ATIVA'
                text='Vamos conversar de verdade pra que
                eu entenda que te trouxe até tua
                situação atual e o que te impediu até
                hoje de atingir teus objetivos.'
            />
            <Topic
                key='2'
                pic={pic2.src}
                title='CONSTRUÇÃO DE UM PLANO DE AÇÃO EM PARCERIA'
                text='Juntas, vamos elaborar um plano de
                ação, que seja executável e eficaz.'
            />
            <Topic
                key='3'
                pic={pic3.src}
                title='ORGANIZAÇÃO DA ROTINA'
                text='Com o plano em mãos vou te ajudar a
                encaixar na tua rotina pra que ele
                aconteça e saia do papel!'
            />
            <Topic
                key='4'
                pic={pic4.src}
                title='MUDANÇA DE COMPORTAMENTO'
                text='Ao longo do nosso acompanhamento, vou
                entender quais os teus comportamentos
                em relação a alimentação não estão
                alinhados com o teu objetivo e através de
                técnicas da Nutrição Comportamental
                vamos virar essa chave.'
            />
            <Topic
                key='5'
                pic={pic5.src}
                title='CONSOLIDAÇÃO DOS RESULTADOS'
                text='Após atingir teus objetivos, vou te ensinar
                como manter, te dando mais autonomia e te
                fornecendo ferramentas para mudança de
                estilo de vida. E claro, te dar alta do
                tratamento!'
            />


        </StyledObjectives>
    )
}

