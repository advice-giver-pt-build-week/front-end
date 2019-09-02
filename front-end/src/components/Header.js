import React from "react";
import styled from "styled-components";
import Img from "./images/talk2_melarge.png";

const Form = styled.div`
  width: 1500px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  vertical-align: center;
  @media screen {
    max-width: 1500px;
  }
`;

const Header = () => {
  return (
    <div className="App">
      <img src={Img} className="App-logo" alt="talk-2-me-logo" />
      <Form>
        <header className="App-header"></header>
      </Form>
    </div>
  );
};

export default Header;
