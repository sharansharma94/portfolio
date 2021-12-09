import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../components/Svgs";

const Box = styled(motion.li)`
  height: 40vh;
  width: 16rem;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};

  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;
const H2 = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Content = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Button = styled(NavLink)`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;
const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

export default function Card({ data }) {
  return (
    <Box key={data.id} variants={Item}>
      <H2>{data.name}</H2>
      <Content>{data.description}</Content>
      <Tags>
        {data.tags.map((tag, id) => (
          <Tag key={id}>{`#${tag}`}</Tag>
        ))}
      </Tags>

      <ButtonContainer>
        <Button to={{ pathname: `${data.demo}` }} target="_blank">
          Visit
        </Button>
        <Git to={{ pathname: `${data.github}` }} target="_blank">
          <Github width={30} height={30} />
        </Git>
      </ButtonContainer>
    </Box>
  );
}
