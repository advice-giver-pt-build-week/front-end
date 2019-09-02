import React from "react";
import styled from "styled-components";
import Img from "./images/talk2_melarge.png";

const Form = styled.div`
  max-width: 3000px;
  width: 90%;
  max-height: 100%;
  @media screen {max-width: 968px}
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
