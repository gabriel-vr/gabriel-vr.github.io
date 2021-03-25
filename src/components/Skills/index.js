import React from 'react';
import { Container, TextCardContainer, TextImageContainer, Title } from '../UI';
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