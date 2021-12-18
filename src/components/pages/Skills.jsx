import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "../Themes";
import { Design, Develope } from "../Svgs";
import PowerButton from "../../common/PowerButton";
import Logo from "../../common/Logo";
import Socials from "../../common/Socials";
import BigTitle from "../../common/BigTitle";
import ParticlesComponent from "../../common/Particles";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
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
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <PowerButton />
        <Logo theme="light" />
        <Socials theme="light" />
        <ParticlesComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
              etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Design width={40} height={40} /> Backend Developer
          </Title>
          <Description>
            I love to create system which are scalable, readable and reliable.
            strong believer in microservices and kubernetes.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Node js, Python, Golang</p>
          </Description>
          <Description>
            <strong>Extra</strong>
            <p>Git, Kubernetes, Docker, MongoDB, AWS, GCP </p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
      ;
    </ThemeProvider>
  );
};

export default Skills;
