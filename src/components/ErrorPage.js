import React from 'react'
import styled, {keyframes}from 'styled-components';
import LogoComponents from '../subComponents/LogoComponents';
import PowerButton from '../subComponents/PowerButton';
import Socialicons from '../subComponents/Socialicons';

const MainContainer = styled.div`
// inspiré d'une video de Le Designer du Web
`

const Box = styled.div`
position:absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
`

const GlitchBloc = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const glitchAnim1 = keyframes`
0% { transform: none }
10% { transform: translate(6px, -2px) }
16% { transform: none }
23% { transform: translate(-12px, -7px) }
33% { transform: none }
43% { transform: translate(10px, -9px) }
54% { transform: none }
68% { transform: translate(7px, 5px) }
100% { transform: none }
`

const glitchAnim2 = keyframes`
0% { transform: none }
10% { transform: translate(-6px, 2px) }
16% { transform: none }
23% { transform: translate(12px, 7px) }
33% { transform: none }
43% { transform: translate(-10px, 9px) }
54% { transform: none }
68% { transform: translate(-7px, 5px) }
100% { transform: none }
`

const skewAnim = keyframes`
0% { transform: none }
16% { transform: none }
23% { transform: skew(5deg, -5deg) translate(10px, 5px) }
33% { transform: none }
43% { transform: skew(5deg, -10deg) translate(-5px, 2px) }
54% { transform: none }
100% { transform: none }
`

const GlitchedAnim1 = styled.p`
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-size: 250px;
  font-weight: 400;
  line-height: 1.1;
  position: absolute;
  top: 0;
  opacity: 0.9;
  color: #f03e3e;
  animation: ${skewAnim} 3s infinite;
`

const GlitchedAnim2 = styled.p`
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-size: 250px;
  font-weight: 400;
  line-height: 1.1;
  position: absolute;
  top: 0;
  opacity: 0.9;
  color: #3df0cf;
  animation: ${glitchAnim1} 3s infinite;
`

const GlitchedAnim3 = styled.p`
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-size: 250px;
  font-weight: 400;
  line-height: 1.1;
  position: absolute;
  top: 0;
  opacity: 0.9;
  color: ${(props) => props.theme.text};
  animation: ${glitchAnim2} 3s infinite;
`

const Invisibletext = styled.p`
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-size: 250px;
  font-weight: 400;
  line-height: 1.1;
  color: #000;
  visibility: hidden;
`

const Info = styled.p`
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  font-size: 20px;
`


function ErrorPage() {
  return <MainContainer>

       <PowerButton />
       <LogoComponents theme={'light'}/>
       <Socialicons theme={'light'}/>
       <Box>
        <GlitchBloc>    
            <Invisibletext>404</Invisibletext>
            <GlitchedAnim1>404</GlitchedAnim1>
            <GlitchedAnim2>404</GlitchedAnim2>
            <GlitchedAnim3>404</GlitchedAnim3>
        </GlitchBloc>
       <Info>Si vous êtes sur cette page, c'est que le lien sur lequel vous avez cliqué n'existe pas, plus, ou est en cours de développement. 🛠️</Info>
       </Box>

  </MainContainer>
}

export default ErrorPage