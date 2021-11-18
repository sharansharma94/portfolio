import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./components/Themes";
import { Route, Switch } from "react-router";
import Main from "./components/Main";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Work from "./components/pages/Work";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
