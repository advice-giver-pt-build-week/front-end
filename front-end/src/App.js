import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import TabNav from "./components/TabNav";
import Header from "./components/Header";
import MentorList from "./components/MentorList";
import UsersList from "./components/UsersList";
import RegisterUser from "./components/RegisterUser";
import TalkToMeLogo from "./components/images/talk2_melarge.png";
import LoginUser from "./components/LoginUser";

const CenterComponent = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const StyledImage = styled.img`
  width: 25%;
  height: 25%;
`;

const App = () => {
  return (
    <main>
      <TabNav />
      <Header />
      <CenterComponent>
        <StyledImage src={TalkToMeLogo} />
      </CenterComponent>
     <CenterComponent> 
        <Switch>
          <Route exact path="/" component={RegisterUser} />
          <Route exact path="/login" component={LoginUser} />
          <Route exact path="/mentors" component={MentorList} />
          <Route exact path="/users" component={UsersList} />
        </Switch> 
      </CenterComponent>
    </main>
  );
};

export default App;
