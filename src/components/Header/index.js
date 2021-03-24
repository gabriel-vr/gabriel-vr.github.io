import React from 'react'
import styled from 'styled-components'
import {colors} from '../../styles/variables'

import image from '../../assets/images/profilepic.jpeg'

import { Contact } from "../Contact";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 1rem;
    background-color: ${colors.purple};

    display: grid;
    grid-template-columns: 1fr 2fr 1fr
`

const ProfileImage = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: .5px solid ${colors.black};
`

const TextHeader = styled.h1`
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    font-size: 2rem;
    color: ${colors.white};
    justify-self: center;
    align-self: center;
`


export function Header(){
    return(
        <Container>
            <ProfileImage
                src={image}
                alt="Profile image"
            />
            <TextHeader>
                Gabriel Vicente Rodrigues
            </TextHeader>
            <Contact color={colors.purple}/> 
        </Container>
    )
}