import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponents';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/Socialicons';
import {lightTheme} from './Themes';
import {Works} from '../data/WorkData';
import BigTitle from '../subComponents/BigTitle';
import ParticleComponent from '../subComponents/ParticleComponent';



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



const WorkIdpage = (props) => {
  // const{name, tags, date, imgSrc, id, description} = props.Work;

    const { workName } = useParams();
    const [filteredWork, setFilteredWork] = useState();
    // const {Worksdata} = props.Work;
  
    console.log("aled ?", workName);
    console.log(props.Work);
    console.log(filteredWork);

    // useEffect(() => {
    //     setFilteredWork(Worksdata.find(work => work.name === parseInt(workName)));
    //   }, [workName, Worksdata]);


  return (
    <ThemeProvider theme={lightTheme}>
        <Box>

            <LogoComponent theme='dark'/>
            <SocialIcons theme='dark'/>
            <PowerButton />
            <ParticleComponent theme='dark' />
   
            <Main>
                {/* {description} */}
            </Main>

            <BigTitle text={filteredWork?.name || 'no name'} top="10%" left="5%" />

        </Box>
    </ThemeProvider>
  )
}

export default WorkIdpage