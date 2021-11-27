import React from "react";
import styled from "styled-components";
import img from "../../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import Logo from "../../common/Logo";
import PowerButton from "../../common/PowerButton";
import Socials from "../../common/Socials";
import { Blogs } from "../../data/BlogData";
import BlogComponent from "../BlogComponent";
const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem+2vw);
`;
export default function Blog() {
  return (
    <MainContainer>
      <Container>
        <Logo />
        <PowerButton />
        <Socials />
        <Center>
          <Grid>
            {React.Children.toArray(
              Blogs.map((blog) => {
                return <BlogComponent blog={blog} />;
              })
            )}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
}
