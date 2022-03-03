import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import {motion} from 'framer-motion';

import LogoComponent from '../subComponents/LogoComponents';
import SocialIcons from '../subComponents/Socialicons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import pageweb from '../assets/Images/webpage.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(30px) translateX(20px) }
100% { transform: translateY(-10px) }

`
const Webpage = styled.div`
position: absolute;
top: 30%;
right: 10%;
width: 20vw;
animation: ${float} 6s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
        <Box>

        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton />
        <ParticleComponent theme='dark' />

        <Webpage>
            <motion.img src={pageweb} alt="Webpage" 
            initial={{
              x:800,
              transition: { type:'spring', duration: 3, delay:0.1}
            }}
            animate={{
             x:0,
             transition: { type:'spring', duration: 3, delay:0.1}
           }}
            />
        </Webpage>    
        <Main>
          Courteous and enthusiastic, I am interested in everything in orbit around me. I am fascinated by web programming, developing game and building websites.
          <br /> <br/>
          I gained experience by working on MMI projects. As this area complements my studies, I am keen to gain more experience in the field.          
          <br/> <br/> 
          For this reason, I am looking for a company willing to offer me a placement among their developers. In return, I would offer my full commitment, and be a pleasant and friendly addition to your team.        
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage

