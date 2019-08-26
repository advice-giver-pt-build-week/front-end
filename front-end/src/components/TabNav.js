import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const TabNav = () => {
  return (
    <div class="tab-menu">
      <NavLink exact activeClassName="active" to={"/"}>
        <a class="tabpage">Welcome Page</a>
      </NavLink>
      <NavLink exact activeClassName="active" to={"/mentors/"}>
        <a class="tabpage">Mentors</a>
      </NavLink>
      <NavLink exact activeClassName="active" to={"/locations/"}>
        <a class="tabpage">Locations</a>
      </NavLink>
    </div>
  );
};

export default TabNav;
