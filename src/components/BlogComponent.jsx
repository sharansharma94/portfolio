import styled from "styled-components";

const Box = styled.div`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
`;
export default function BlogComponent({ blog }) {
  return <Box>Blog {blog.name}</Box>;
}
