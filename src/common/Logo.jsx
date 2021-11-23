import styled from "styled-components";
import { darkTheme } from "../components/Themes";

const LogoContainer = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;
export default function Logo({ theme }) {
  return <LogoContainer color={theme}>SS</LogoContainer>;
}
