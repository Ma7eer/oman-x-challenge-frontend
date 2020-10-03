import React from "react";
import { Link } from "react-router-dom";

import Container from "../components/layout/Container";

const Home = () => {
  return (
    <Container>
      <h1>Hello This is the Home Page!</h1>
      <ul>
        <li>
          <Link to="upload-invoice">Upload Invoice</Link>
        </li>
        <li>
          <Link to="upload-bank-statement">Upload Bank Statement</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
