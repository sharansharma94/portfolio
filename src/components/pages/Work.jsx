import styled, { ThemeProvider } from "styled-components";
import BigTitle from "../../common/BigTitle";
import Card from "../../common/Card";
import Logo from "../../common/Logo";
import PowerButton from "../../common/PowerButton";
import Socials from "../../common/Socials";
import { darkTheme } from "../Themes";

import { Worked } from "../../data/WorkData";
const Box = styled.div`
  height: 400vh;
  position: relative;
  background-color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  height: 40vh;
  position: fixed;
  top: 12rem;
  left: calc(10rem+15vw);
  display: flex;
  color: white;
`;
const Work = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Logo theme="dark" />
        <Socials theme="dark" />
        <PowerButton />
        <BigTitle text="WORK" top="10%" left="35%" />
        <Main>
          {Worked.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Work;
