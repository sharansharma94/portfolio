import styled, { ThemeProvider } from "styled-components";
import BigTitle from "../../common/BigTitle";
import Card from "../../common/Card";
import Logo from "../../common/Logo";
import PowerButton from "../../common/PowerButton";
import Socials from "../../common/Socials";
import { darkTheme } from "../Themes";
import { motion } from "framer-motion";

import { Worked } from "../../data/WorkData";
import { YinYang } from "../Svgs";
import { useEffect, useRef } from "react";
const Box = styled.div`
  height: 400vh;
  position: relative;
  background-color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  height: 40vh;
  position: fixed;
  top: 12rem;
  left: calc(10rem+15vw);
  display: flex;
  color: white;
`;

const Rotate = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
const Work = () => {
  const yinyang = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      return (yinyang.current.style.transform = `rotate(${-window.pageYOffset}deg)`);
    };
    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Logo theme="dark" />
        <Socials theme="dark" />
        <PowerButton />
        <BigTitle text="WORK" top="10%" left="35%" />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Worked.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default Work;
