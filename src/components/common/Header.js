import React from "react";

const Header = ({ text }) => {
  return (
    <>
      <h1 className="mb-4">{text}</h1>
      <hr />
      <br />
    </>
  );
};

export default Header;
