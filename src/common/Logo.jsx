import styled from "styled-components";

const LogoContainer = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;
export default function Logo() {
  return <LogoContainer>SS</LogoContainer>;
}
