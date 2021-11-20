import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../common/Logo";
import PowerButton from "../common/PowerButton";
import Socials from "../common/Socials";

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
  left: 2rem;
  transform: translate(-50%, -50%) rotate(90deg);
  text-decoration: none;
  z-index: 1;
`;
const Main = () => {
  return (
    <>
      <MainContainer>
        <Container>
          <PowerButton />
          <Logo />
          <Socials />
          <Contact
            target="_blank"
            to={{ pathname: "mailto:sharmasharan94@outlook.com" }}
          >
            <h3>Say hi..</h3>
          </Contact>

          <Blog to="/blog">
            <h3>Blog</h3>
          </Blog>

          <Work to="/blog">
            <h3>Work</h3>
          </Work>
        </Container>
      </MainContainer>
    </>
  );
};

export default Main;
