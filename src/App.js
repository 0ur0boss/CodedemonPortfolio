import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import Workpage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import WorkIdpage from './components/WorkIdpage';
import { AnimatePresence } from "framer-motion";
import ErrorPage from './components/ErrorPage';

function App() {
  const location = useLocation();


  return <>

  <GlobalStyle/> 

    <ThemeProvider theme={lightTheme}>
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main} ></Route>
        <Route exact path="/about" component={AboutPage} ></Route>
        <Route exact path="/skills" component={MySkillsPage} ></Route>
        <Route exact path="/work" component={Workpage} ></Route>
        <Route exact path="/work:workName" component={WorkIdpage}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </AnimatePresence>
    </ThemeProvider>

    </>
    
}

export default App

