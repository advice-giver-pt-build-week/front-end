import React from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import Menu from "./Menu";

// const TabForm = styled.div`
//   margin: 15px 15px 15px 15px;
//   padding: 15px 15px 15px 15px;
//   width: 200px;
//   display: flex;
//   flex-direction: column;
//   font-size: 25px;
//   justify-content: space-around;
//   background-color: transparent;
//   align-items: left;
//   font-family: "Oswald", sans-serif;
//   @media screen {
//     max-width: 768px;
//   }
// `;

// const StyledLink = styled(NavLink)`
// text-decoration: none;
// font-size: 25px;
// color: black;
// :hover{
//   color: hotpink;
// }
// `;

const TabNav = () => {
  return (
    <div>
      <Menu>
    {/* <TabForm>     
      <StyledLink to="/">
        Home
      </StyledLink>
      <StyledLink to="/login">
        Login
      </StyledLink>
      <StyledLink to="/mentors">
        My Mentors
      </StyledLink>
      <StyledLink to={"/users"}>
        Users
      </StyledLink>
      </TabForm> */}
      </Menu>
    </div>
  );
};

export default TabNav;
