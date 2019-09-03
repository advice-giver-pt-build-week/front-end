import React, { useEffect, useState } from "react";
import { isEmail, isNumeric } from "validator";
import axios from "axios";
import { USERS_URL } from "../constants";
import UsersCard from "./UsersCard";
import styled from "styled-components";

const UsersForm = styled.div`
  margin: 15px 15px 15px 25px;
  padding: 15px 15px 15px 25px;
  border: 5px solid hotpink;
  width: 350px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  color: hotpink;
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  @media screen {
    max-width: 968px;
  }
`;

const ListUsers = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios
      .get(USERS_URL, {
        headers: {
          authorization: `${localStorage.getItem("token")}`
        }
      })
      .then(response => {
        console.log(response)
        setUsersData(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  console.log(usersData);

  return (
    <div>
      <UsersForm>
        <section className="users-list grid-view">
          {usersData.map(users => {
            return <UsersCard usersInfo={users} />;
          })}
        </section>
      </UsersForm>
    </div>
  );
};

export default ListUsers;