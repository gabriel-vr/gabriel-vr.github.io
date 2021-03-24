import React from 'react'

import {Container, ImageContainer, TextContainer, TextImageContainer, Title} from '../UI/index'
import {texts} from '../../styles/texts'

export function AboutMe(){
    return(
        <Container>
            <Title>
                Sobre Mim
            </Title>
            <TextContainer>
                {texts.Sobremim}
            </TextContainer>
        </Container>

    )
}