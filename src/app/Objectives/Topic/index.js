
import { CustomText, CustomTitle, StyledImage, StyledObjectivesTopic, TextContainer } from "./styles";

export default function Topic ({pic, title, text}) {
    return(
        <StyledObjectivesTopic>
                <StyledImage src={pic} alt='mulher escutando' />
                <TextContainer>
                    <CustomTitle size='20px' weight='600' align='center'>
                        {title}
                    </CustomTitle>
                    <CustomText align='center' size='16px'>
                        {text}
                    </CustomText>
                </TextContainer>
            </StyledObjectivesTopic>
    )
}