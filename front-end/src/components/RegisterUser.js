import React, { useState } from "react";
import { isEmail, isNumeric } from "validator";
import axios from "axios";
import { REGISTER_URL } from "../constants";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
    <Form
      onSubmit={handleSubmit}
    >
      Email
      <input name="email" value={email} type="email" onChange={handleChange} />
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
    </Form>
  );
};

export default RegisterUser;
