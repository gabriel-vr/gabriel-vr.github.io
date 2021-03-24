import React from 'react'

import styled from 'styled-components'

import react from '../../assets/images/react.png'
import js from '../../assets/images/js.png'
import c from '../../assets/images/c.png'
import wordpress from '../../assets/images/wordpress.png'

const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    width: 90%;
    gap: 1rem;
`;
const Image = styled.img`
    width: 50%;
    height: auto;
`;


export function Skillspics(){
    return(
        <ImagesContainer>
            <Image src={react} alt="React"/>
            <Image src={js} alt="Java Script"/>
            <Image src={c} alt="C"/>
            <Image src={wordpress} alt="WordPress"/>
        </ImagesContainer>

    )
}