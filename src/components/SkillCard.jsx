import React from 'react';
// import { useInView } from 'react-intersection-observer';
import styled from 'styled-components'; // Import StyleSheetManager
import { navFont } from '../styles/CommonComp';
import { mobile1 } from '../styles/Responsive';

const SkillBox = styled.div`
    border: 1px solid ${props => props.color};
    border-bottom: none;
    border-right: none;
    width: 80%;
    flex-direction: column;
    padding: 1.5rem 2rem;
    gap: 2.8rem;
    border-radius: 1.5rem;
    box-shadow: 0.6rem 0.6rem 0.8rem 0.1rem #03001c84;
    ${mobile1({ width: '82%', gap: '3rem' })}

    &:hover {
        background-color: #0c0e1a;
    }
`;

const Skill = styled.h4`
    font-family: ${navFont};
    font-size: 1.7rem;
    color: ${props => props.color};
    letter-spacing: 0.1rem;
    font-weight: lighter !important;
`;

const Image = styled.img`
    width: 8rem;
    transition: transform 0.5s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const SkillCard = (props) => {

    return (
        <>

                <SkillBox className='d-flex' color={props.color} data-aos="zoom-in">
                    <Skill color={props.color}>{props.name}</Skill>
                    <Image src={props.image} alt='' />
                </SkillBox>
        </>
    )
}

export default SkillCard;
