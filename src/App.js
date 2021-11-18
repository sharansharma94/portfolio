import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./components/Themes";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        App File
      </ThemeProvider>
    </>
  );
}

export default App;
