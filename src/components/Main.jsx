import styled from "styled-components";
import Logo from "../common/Logo";
import PowerButton from "../common/PowerButton";
import Socials from "../common/Socials";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vh;
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
const Main = () => {
  return (
    <>
      <MainContainer>
        <Container>
          <PowerButton />
          <Logo />
          <Socials />
        </Container>
      </MainContainer>
    </>
  );
};

export default Main;
