import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { Contact } from '../Contact';

const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;
    align-items: center;
    background-color: ${props => props.color};
    padding: ${props => props.padding};
`;

FooterContainer.defaultProps = {
    color: colors.black,
    padding: 0,
};

const TextContainer = styled.p`
    font-size: ${props => props.size};
    font-weight: 500;
    color: ${props => props.color};

    text-align: center;
    word-break: break-word;
`;

TextContainer.defaultProps = {
    color: colors.blue_dark,
    size: '1.5rem',
}

export function Footer(){
    return(
        <FooterContainer color={colors.black} padding={"2rem 0rem"}>
            <Contact color={colors.black}/>
            <TextContainer color={colors.white} size="1rem">
                    Copyright &copy; Gabriel Vicente Rodrigues
            </TextContainer>
            <TextContainer color={colors.white} size='1rem'>
                gvicente53@gmail.com
            </TextContainer>
        </FooterContainer>
    );
}