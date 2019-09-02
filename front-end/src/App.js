import React from "react";
import TabNav from "./components/TabNav";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import MentorList from "./components/MentorList";
import "./App.css";
import RegisterUser from "./components/RegisterUser";

const App = () => {
  return (
    <main>
      <TabNav />
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/mentors" component={MentorList} />
      <RegisterUser />
    </main>
  );
};

export default App;