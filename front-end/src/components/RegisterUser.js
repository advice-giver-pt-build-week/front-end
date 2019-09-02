import React, { useState } from "react";
import { isEmail, isNumeric } from "validator";
import axios from "axios";
import { REGISTER_URL } from "../constants";
import styled from "styled-components";

const LogForm = styled.div`
  margin: 15px 15px 15px 25px;
  padding: 15px 15px 15px 25px;
  border: 5px solid hotpink;
  width: 250px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-around; */
  color: hotpink;
  /* color: #3b3b89; */
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  @media screen {max-width: 968px}
`;

const initialFormState = {
  username: "",
  password: "",
  email: "",
  adviceGiver: false,
  expertise: "",
  yearsOfExperience: 0,
  age: 0
};

const RegisterUser = () => {
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = event => {
    console.log(event.target);
    const newState = formState;

    newState[event.target.name] = event.target.value;

    setFormState({ ...newState });
  };

  const handleCheckbox = event => {
    const newState = formState;

    newState[event.target.name] = !formState[event.target.name];

    setFormState({ ...newState });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post(REGISTER_URL, formState)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const {
    username,
    password,
    email,
    expertise,
    adviceGiver,
    age,
    yearsOfExperience
  } = formState;

  return (
  <div>
      <LogForm onSubmit={handleSubmit}>
        Email
        <input
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
        />
          Username
          <input
            name="username"
            value={username}
            type="text"
            onChange={handleChange}
          />
          Password
          <input
            name="password"
            value={password}
            type="password"
            onChange={handleChange}
          />
        Expertise
        <input
          name="expertise"
          value={expertise}
          type="text"
          onChange={handleChange}
        />
        Age
        <input name="age" value={age} type="number" onChange={handleChange} />
        Years Of Experience
        <input
          name="yearsOfExperience"
          value={yearsOfExperience}
          type="number"
          onChange={handleChange}
        />
        Advice Giver?
        <input
          name="adviceGiver"
          type="checkbox"
          onChange={handleCheckbox}
          checked={adviceGiver}
        />
        <button name="submit" value="Submit">
          Submit
        </button>
      </LogForm>
    </div>
  );
};

export default RegisterUser;
