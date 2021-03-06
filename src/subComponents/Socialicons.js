import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {Github,Twitter,Linkdin,Instagram} from '../components/AllSvgs'
import { lightTheme } from '../components/Themes';
import { motion } from 'framer-motion';




const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position:fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`


const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? lightTheme.body : lightTheme.text};
`



const Socialicons = (props) => {
  return <Icons>
    <motion.div
    initial={{transform:"scale(0)"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1.6}}
    >
        <NavLink rel="noreferrer" title="linkedin" style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.linkedin.com/in/enzo-duret-36535a210/"}}>
            <Linkdin width={25} height={25} fill={props.theme === "dark" ? lightTheme.body : lightTheme.text}></Linkdin>
        </NavLink>
    </motion.div>
    <motion.div
    initial={{transform:"scale(0)"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1}}
    >
        <NavLink rel="noreferrer" title="github" style={{color: 'inherit'}} target="_blank" to={{pathname:"https://github.com/0ur0boss"}}>
            <Github width={25} height={25} fill={props.theme === "dark" ? lightTheme.body : lightTheme.text}></Github>
        </NavLink>
    </motion.div>
    <motion.div
    initial={{transform:"scale(0)"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1.4}}
    >
        <NavLink rel="noreferrer" title="instagram" style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.instagram.com/enzoduret/"}}>
            <Instagram width={25} height={25} fill={props.theme === "dark" ? lightTheme.body : lightTheme.text}></Instagram>
        </NavLink>
    </motion.div>
    <motion.div
    initial={{transform:"scale(0)"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1.2}}
    >
        <NavLink rel="noreferrer" title="twitter" style={{color: 'inherit'}} target="_blank" to={{pathname:"https://twitter.com/enzo_duret"}}>
            <Twitter width={25} height={25} fill={props.theme === "dark" ? lightTheme.body : lightTheme.text}></Twitter>
        </NavLink>
    </motion.div>

    <Line color={props.theme} 
        initial={{
            height:0
        }}
        animate={{
            height: '8rem'
        }}
        transition={{
            type:'spring', duration:1, delay:0.8,
        }}
    />
  </Icons>;
};

export default Socialicons;
