import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../components/Themes';


const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? lightTheme.body : lightTheme.text};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;

`



function LogoComponents(props) {
  return <Logo color={props.theme}>
        ED
  </Logo>;
}

export default LogoComponents;
