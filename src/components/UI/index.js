import styled from 'styled-components'
import { colors } from '../../styles/variables';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;

    background-color: ${(props)=> props.color}
`;

Container.defaultProps = {
    color: colors.white,
}

export const ContainerRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify_content};
    background-color: ${(props)=> props.color};
    padding: ${(props)=>props.padding};
`;
ContainerRow.defaultProps = {
    color: colors.white,
    padding: 0,
    justify_content: 'center',
}

export const IconLink = styled.a`
    margin: 0px 10px;
    color: ${colors.white};
    transition: 0.3s;

    :hover{
        filter: brightness(80%);
    }
`

export const TextImageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-items: center;
    align-items: center;
`;

export const TextContainer = styled.p`
    width: 40%;
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

export const TextCardContainer = styled.p`
    width: 40%;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${colors.blue_dark};

    text-align: start;
    word-break: break-word;
`
export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${colors.blue_dark};
    
    padding-bottom: 5px;
    border-bottom: .5px solid ${colors.purple};
`;

export const ImageContainer = styled.img`
    width: 60%;
    height: auto;
    border-radius: 5px;
`;