import React, { useState } from "react";
import {
  StyledInput,
  LogForm,
  StyledButton,
  inputChange
} from "./RegisterUser";
import { LOGIN_URL } from "../constants";
import axios from "axios";

const initialFormState = {
  username: "",
  password: ""
};

const LoginUser = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = event => {
    inputChange(event, formState, setFormState);
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post(LOGIN_URL, formState)
      .then(response => {
        console.log(response);
        if (response.status === 200 || response.statusText === "OK") {
          setFormState({ ...initialFormState });
          setSubmitStatus("User Logged In");
          localStorage.setItem("token", response.data.token);
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

  const { username, password } = formState;

  return (
    <LogForm onSubmit={handleSubmit}>
      {submitStatus && submitStatus} <br />
      Username
      <StyledInput
        onChange={handleChange}
        name="username"
        value={username}
        type="text"
      />
      Password
      <StyledInput
        onChange={handleChange}
        name="password"
        value={password}
        type="password"
      />
      <StyledButton name="submit" value="Submit" onClick={handleSubmit}>
        Submit
      </StyledButton>
    </LogForm>
  );
};

export default LoginUser;
