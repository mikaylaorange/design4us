import React from "react";
import styled from "@emotion/styled";
import Header from "../molecules/Header";
import About from "../molecules/About";
import Landing from "../molecules/Landing";
import Schedule from "../molecules/Schedule";
import Team from "../molecules/Team";
import Footer from "../molecules/Footer"
const Container = styled.div`
  width: 100vw;
  background: #ffffff;
	display: flex;
	flex-direction: column;
  position: relative;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Landing />
      <About />
      <Schedule />
      <Team/>
    </Container>
  );
};
export default Home;
