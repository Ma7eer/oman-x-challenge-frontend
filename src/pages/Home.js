import React from "react";

import Container from "../components/layout/Container";

import Logo from "../assets/images/tadqeeq logo.jpeg";

const Home = () => {
  return (
    <Container>
      <img src={Logo} alt="Tadqeeq Logo" width="500rem" />
    </Container>
  );
};

export default Home;
