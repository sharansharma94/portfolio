import styled, { ThemeProvider, keyframes } from "styled-components";
import Logo from "../../common/Logo";
import ParticlesComponent from "../../common/Particles";
import PowerButton from "../../common/PowerButton";
import Socials from "../../common/Socials";
import { darkTheme } from "../Themes";

import astronout from "../../assets/Images/spaceman.png";
import BigTitle from "../../common/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px)}
50% { transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px) }
`;

const SpaceMan = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;

  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  border: 0.5rem solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
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
        <Content>
          I'm a front-end developer located in India. I love to create simple
          yet beautiful websites with great user experience.
          <br /> <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. I'm an independent freelancer and blogger. I
          love to write blogs and read books.
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links
        </Content>
        <BigTitle text="ABOUT" top="10%" left="05%" />
      </Box>
    </ThemeProvider>
  );
};

export default About;
