import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { Route, Switch, useLocation } from "react-router";
import Main from "./components/Main";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Work from "./components/pages/Work";
import Skills from "./components/pages/Skills";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./common/SoundBar";

import constants from "./config/constants";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path={constants.ROOT_PATH} component={Main} />
            <Route exact path={constants.ABOUT_PATH} component={About} />
            <Route exact path={constants.BLOG_PATH} component={Blog} />
            <Route exact path={constants.WORK_PATH} component={Work} />
            <Route exact path={constants.SKILLS_PATH} component={Skills} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
