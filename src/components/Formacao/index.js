import React from 'react'

import {Container, ImageContainer, TextCardContainer, TextImageContainer, Title} from '../UI/index'
import {texts} from '../../styles/texts'
import image from "../../assets/images/icmc.jpeg"

export function Formacao(){
    return(
        <Container>
            <Title>
                Formação
            </Title>
            <TextImageContainer>
                <TextCardContainer>
                    {texts.Formacao}
                </TextCardContainer>
                <ImageContainer src={image} alt="ICMC" />
            </TextImageContainer>
        </Container>

    )
}