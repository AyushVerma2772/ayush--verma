import React from 'react';
import styled from 'styled-components';
import { Heading2, mainBgColor} from '../styles/CommonComp';
import { mobile1 } from '../styles/Responsive';
import SkillCard from './SkillCard';

import htmlIcon from '../images/html-logo.png';
import cssIcon from '../images/css-logo.png';
import jsIcon from '../images/js-logo.png';
// import pythonIcon from '../images/python-logo.png';
import reactIcon from '../images/react-icon.svg';
import nodeJsIcon from '../images/node-js-icon.svg';
import expressJsIcon from '../images/Express-js.png';
import mongoDbIcon from '../images/mongodb-icon.svg';
import reduxIcon from '../images/redux-icon.svg';
import tailwindIcon from '../images/tailwind-icon.svg';
import firebaseIcon from '../images/firebase.png';



const Wrapper = styled.section`
    padding: 0 4rem;
    position: relative;
    border: 0.1rem solid ${mainBgColor};

    &::before {
        content: "<skills>";
        top: 0;
    }

    &::after {
        content: "</skills >";
        bottom: 0;
    }
`;

const Container = styled.div`
    width: 95%;
    margin: 7rem auto; 
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    column-gap: 1rem;
    row-gap: 4rem;
    justify-items: center;
    ${mobile1({gridTemplateColumns: 'repeat(2, 1fr)'})}
`;


const Skills = () => {

    const skills = [
        { id: 1, name: 'HTML', image: htmlIcon, color: 'coral' },
        { id: 2, name: 'CSS', image: cssIcon, color: '#504cf8' },
        { id: 3, name: 'JavaScript', image: jsIcon, color: '#fdee43' },
        { id: 4, name: 'Node.js', image: nodeJsIcon, color: '#2FDF84' },
        { id: 5, name: 'React.js', image: reactIcon, color: '#61DBFB' },
        { id: 6, name: 'Express.js', image: expressJsIcon, color: '#BEEEC1' },
        { id: 7, name: 'MongoDB', image: mongoDbIcon, color: '#4FAA41' },
        { id: 8, name: 'Tailwind CSS', image: tailwindIcon, color: '#38b2ac' },
        { id: 9, name: 'Redux', image: reduxIcon, color: '#764abc' },
        { id: 10, name: 'firebase', image: firebaseIcon, color: '#fcc632' },
    ];

    return (
        <>
            <Wrapper id="skills" className='tag'>
                <Heading2><span>My Skills 🔧</span></Heading2>

                <Container>
                    {
                        skills.map(ele =>  (
                                <SkillCard key={ele.id} name={ele.name} image={ele.image} color={ele.color} percentage={ele.percentage} />
                            )
                        )
                    }

                </Container>
            </Wrapper>
        </>
    )
}

export default Skills