import React from 'react';
import { Container, ImageContainer, TextCardContainer, TextContainer, TextImageContainer, Title } from '../UI';

import image from '../../assets/images/icmc.jpeg'
import { texts } from '../../styles/texts';
import { Skillspics } from './Skillspics';

export function Skills(){
    return(
        <Container>
            <Title>
                Minhas Competências
            </Title>
            <TextImageContainer>
                <Skillspics />
                <TextCardContainer>
                - React JS<br/><br/>
                - Java Script<br/><br/>
                - C<br/><br/>
                - WordPress
                </TextCardContainer>
            </TextImageContainer>
        </Container>
    )
}