import Particles from "tsparticles";
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

export default function ParticlesComponent(props) {
  return (
    <Box>
      <Particles
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? configLight : configDark}
      />
    </Box>
  );
}
