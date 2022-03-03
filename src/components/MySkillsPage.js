import React from 'react';
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import {lightTheme} from './Themes';
import {Unity, Develope} from './AllSvgs'
import LogoComponents from '../subComponents/LogoComponents';
import PowerButton from '../subComponents/PowerButton';
import Socialicons from '../subComponents/Socialicons';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`


const MySkillsPage = () => {
  return <ThemeProvider theme={lightTheme}>

    <Box>
      <LogoComponents theme='light'/>
      <Socialicons theme='light'/>
      <PowerButton />

      <ParticleComponent theme='light' />

          <Main>
            <Title>
              <Develope width={40} height={40} fill='currentColor' /> Front End Dev
            </Title>
            <Description>
            I like to create websites, respecting the client's constraints while learning new things is the best part !
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>
              Html, Css, Js, React, Sass, Bootstrap, Ruby, Three.Js etc..
              </p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>
              VScode, Github, Codepen, Figma
              </p>
            </Description>

          </Main>
          <Main>
            <Title>
              <Unity width={40} height={40} fill='currentColor' /> Designer
            </Title>
            <Description>
            I love creating video games, from game design to development! Thinking about how the player will evolve in the levels. How objects interact with each other. And the procedural systems. I love all aspects of making a game!
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>
              Unity, Blender, Adobe suite etc..
              </p>
            </Description>
          </Main>
            <BigTitle text="Skills" top="76%" right="25%" />
      </Box>

  </ThemeProvider> 
};

export default MySkillsPage;