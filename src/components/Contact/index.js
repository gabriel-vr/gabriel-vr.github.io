import React from 'react';
import {FaInstagram, FaFacebookSquare, FaLinkedin, FaGithub} from 'react-icons/fa'
import { colors } from '../../styles/variables';
import { ContainerRow, IconLink } from '../UI'

export function Contact({color}){
    return(
        <ContainerRow color={color}>
            <IconLink href="https://www.instagram.com/ga_vr/" target="_blank">
                <FaInstagram size='20px' />
            </IconLink>
            <IconLink href='https://www.facebook.com/profile.php?id=100008182415048' target="_blank">
                <FaFacebookSquare size='20px' />
            </IconLink>
            <IconLink href='https://www.linkedin.com/in/gabriel-vr' target="_blank">
                <FaLinkedin size='20px' />
            </IconLink>
            <IconLink href='https://github.com/gabriel-vr' target="_blank">
                <FaGithub size='20px' />
            </IconLink>
        </ContainerRow>
    )
}