import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Logo from "../common/Logo";
import PowerButton from "../common/PowerButton";
import Socials from "../common/Socials";
import { YinYang } from "./Svgs";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 3;
`;

const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const Work = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const About = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
  from {
    transform:rotate(0);
  }
  to {
    transform:rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);

  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1ms ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    padding-top: 1rem;
  }
`;
const Main = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);
  return (
    <>
      <MainContainer>
        <Container>
          <PowerButton />
          <Logo />
          <Socials />

          <Center click={click}>
            <YinYang
              onClick={handleClick}
              width={click ? 120 : 200}
              height={150}
              fill="currentColor"
            />
            <span>Click Here</span>
          </Center>

          <Contact
            target="_blank"
            to={{ pathname: "mailto:sharmasharan94@outlook.com" }}
          >
            <h2>Say hi..</h2>
          </Contact>

          <Blog to="/blog">
            <h2>Blog</h2>
          </Blog>

          <Work to="/blog">
            <h2>Work</h2>
          </Work>

          <BottomBar>
            <About to="/about">
              <h2>About</h2>
            </About>
            <Skills to="/skills">
              <h2>My Skill</h2>
            </Skills>
          </BottomBar>
        </Container>
      </MainContainer>
    </>
  );
};

export default Main;
