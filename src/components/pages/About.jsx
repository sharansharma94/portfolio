import styled, { ThemeProvider } from "styled-components";
import Logo from "../../common/Logo";
import ParticlesComponent from "../../common/Particles";
import PowerButton from "../../common/PowerButton";
import Socials from "../../common/Socials";
import { darkTheme } from "../Themes";

import astronout from "../../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const SpaceMan = styled.div`
  position: absolute;
`;
const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Logo theme="dark" />
        <Socials theme="dark" />
        <PowerButton />
        <ParticlesComponent theme="dark" />
        <SpaceMan>
          <img src={astronout} alt="astronut" />
        </SpaceMan>
        About page
      </Box>
    </ThemeProvider>
  );
};

export default About;
