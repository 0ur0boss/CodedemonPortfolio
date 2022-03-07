import React, {useEffect, useState} from 'react'
import { useParams,NavLink } from "react-router-dom";
import styled, { keyframes, ThemeProvider } from 'styled-components'
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/Socialicons';
import LogoComponents from '../subComponents/LogoComponents';
import {lightTheme} from './Themes';
import {Works} from '../data/WorkData';
import BigTitle from '../subComponents/BigTitle';
import ParticleComponent from '../subComponents/ParticleComponent';
import {motion} from 'framer-motion';
import {BackLogo} from './AllSvgs';



const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;

`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 0;
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

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(40px) translateX(20px) }
100% { transform: translateY(-10px) }
`

const Media = styled.img`
position: absolute;
top: 30%;
right: 6%;
width: 30vw;
animation: ${float} 6s ease infinite;
img{
    width: 100%;
    height: auto;
}
`

const Btn = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
bottom: 1rem;
right: 3vw;
text-decoration: none;
z-index:1;
font-size: 1em;
font-family: 'Karla', sans-serif;
font-weight: 500;
`
const BackWork = styled(NavLink)`
color: ${(props) => props.theme.text};
position: fixed;
left: 6rem;
top: 10rem;
z-index:3;
`

const WorkIdpage = () => {

    const { workName } = useParams();
    const [filteredWork, setFilteredWork] = useState();

    useEffect(() => {
        setFilteredWork(Works.find((work) => work.name === workName));
      }, [workName]);


  return (
    <ThemeProvider theme={lightTheme}>
        <Box>

            <SocialIcons theme='light'/>
            <PowerButton />
            <ParticleComponent theme='light' />
            <LogoComponents />

            <Media src={filteredWork?.imgSrc || 'no img'} />
   

              <BackWork to="/work">
                <motion.div
                whileHove
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.8}}
                >
                <BackLogo style={{color: 'inherit'}} width={40} height={40} fill='currentColor'></BackLogo>
                </motion.div>
              </BackWork>

            <Main>
              {filteredWork?.description || 'no description'}
            <Btn  target="_blank" to={{pathname:filteredWork?.link} || '/404'}>
              <motion.h2
              whileHove
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}>
                Lien vers le projet
              </motion.h2>
            </Btn>
            </Main>

            <BigTitle text={filteredWork?.name || 'no name'} top="10%" left="10%" />

        </Box>
    </ThemeProvider>
  )
}

export default WorkIdpage