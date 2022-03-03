import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import LogoComponents from '../subComponents/LogoComponents';
import PowerButton from '../subComponents/PowerButton';
import Socialicons from '../subComponents/Socialicons';
import {lightTheme} from './Themes';
import {Works} from '../data/WorkData';
import WorkCompenent from './WorkCompenent';
import AnchorComponent from '../subComponents/AnchorComponent';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle';
// import { motion } from 'framer-motion'



const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`


const WorkPage = () => {

  const [numbers, setNumbers] = useState(0);

  // Définie la distance ou l'anchor descend / sa vitesse
  useEffect(() => {
    let num = (window.innerHeight - 70)/28;
    setNumbers(parseInt(num));
  }, [])



  return <ThemeProvider theme={lightTheme}>

    <Container>
      <ParticleComponent theme='light' />
      <LogoComponents />
      <PowerButton />
      <Socialicons />
      <AnchorComponent numbers={numbers} />
      <Center>
        <Grid>
          {
            Works.map(Work => {
              return (<WorkCompenent key={Work.id} Work={Work} />)
            })
          }
        </Grid>
      </Center>
      <BigTitle text="Works" top="3rem" left="5rem" />
    </Container>

</ThemeProvider>
};

export default WorkPage;