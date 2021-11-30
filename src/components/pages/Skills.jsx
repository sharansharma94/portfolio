import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "../Themes";
import { Design, Develope } from "../Svgs";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Main>
          <Design width={40} height={40} />
          Designer
        </Main>
        <Main>
          <Develope width={40} height={40} /> Developer
        </Main>
      </Box>
      ;
    </ThemeProvider>
  );
};

export default Skills;
