import React, { useState } from "react";
import { isEmail, isNumeric } from "validator";
import axios from "axios";
import { REGISTER_URL } from "../constants";
import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 25px;
  border-color: darkgray;
  border: 2px solid darkgray;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  height: 35px;
  padding-left: 10px;

  @media screen {
    max-width: 1000px;
  }

  :focus {
    outline: 2px dotted grey;
  }
`;

export const LogForm = styled.div`
  margin: 15px 15px 15px 25px;
  padding: 15px 15px 15px 25px;
  border: 5px solid hotpink;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 275px;
  color: hotpink;
  font-family: "Oswald", sans-serif;
`;

export const StyledButton = styled.button`
  width: 200px;
  margin: 0px 15px 0px 15px;
  padding: 10px 15px 15px 15px;
  color: grey;
  font-weight: bold;
  background: black;
  border-radius: 25px;
  font-size: 25px;
  height: 50px;
  text-align: center;
  :focus {
    outline: 2px dotted grey;
  }
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

export const inputChange = (event, formState, setFormState) => {
  const newState = formState;

  newState[event.target.name] = event.target.value;

  setFormState({ ...newState });
};

export const checkboxChange = (event, formState, setFormState) => {
  const newState = formState;

  newState[event.target.name] = !formState[event.target.name];

  setFormState({ ...newState });
};

const RegisterUser = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = event => {
    inputChange(event, formState, setFormState);
  };

  const handleCheckbox = event => {
    checkboxChange(event, formState, setFormState);
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post(REGISTER_URL, formState)
      .then(response => {
        if (response.status === 201 || response.statusText === "Created") {
          setFormState({ ...initialFormState });
          setSubmitStatus("User Successfully Created");
        } else if (response.status === 500) {
          setSubmitStatus("Error 500 Internal Server Error");
        } else {
          setSubmitStatus(`Error Creating User: ${response.statusText}`);
        }
      })
      .catch(err => {
        setSubmitStatus("Error 500 Internal Server Error");
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
        {submitStatus && submitStatus} <br />
        Email
        <StyledInput
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
        />
        Username
        <StyledInput
          name="username"
          value={username}
          type="text"
          onChange={handleChange}
        />
        Password
        <StyledInput
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
        />
        Expertise
        <StyledInput
          name="expertise"
          value={expertise}
          type="text"
          onChange={handleChange}
        />
        Age
        <StyledInput
          name="age"
          value={age}
          type="number"
          onChange={handleChange}
        />
        Years Of Experience
        <StyledInput
          name="yearsOfExperience"
          value={yearsOfExperience}
          type="number"
          onChange={handleChange}
        />
        Advice Giver?
        <StyledInput
          name="adviceGiver"
          type="checkbox"
          onChange={handleCheckbox}
          checked={adviceGiver}
        />
        <StyledButton name="submit" value="Submit" onClick={handleSubmit}>
          Submit
        </StyledButton>
      </LogForm>
    </div>
  );
};

export default RegisterUser;
