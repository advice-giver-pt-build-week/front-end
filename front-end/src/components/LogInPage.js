import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const  UserForm = ({ errors, touched, values, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [users, status]);

  return (
    <div>
        <header>Welcome to Talk 2 Me</header>
      <Form>
          <h1>Enter Your Name</h1>
        <Field
          component="input"
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        {touched.name && errors.name && <h1>{errors.name}</h1>}
        <h2>Enter Your Email & Password</h2>
        <Field component="input" type="email" placeholder="Enter Email" />
        {touched.email && errors.email && <h2>{errors.email}</h2>}
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Enter Password"
        />

        {touched.password && errors.password && <h3>{errors.password}</h3>}
        <div>
        <label>Legal Blah Blah Blah Required</label>
        <Field
          type="checkbox"
          name="termsOfService"
          checked={values.termsOfService}
        />
        {touched.termsOfService && errors.termsOfService && (
          <p>{errors.termsOfService}</p>
        )}
        <button>Submit</button>
        </div>
      </Form>

      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
          <h3>{user.password} </h3>
          <p>
            {user.termsOfService} Successfully Accepted our Terms of Service
          </p>
        </div>
      ))}
    </div>
  );
}

const formikCom = withFormik({
  mapsPropsToValues({ name, email, password, termsOfService }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      termsOfService: termsOfService || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Enter Your Name For a Chance To Win An Amazing Prize")
      .matches(/^[A-Za-z ]+$/, "No numbers or special characters"),
    email: Yup.string()
      .required("Enter your email")
      .email(),
    password: Yup.string()
      .required("Enter password")
      .min(8, "Must contain 8 characters"),
    termsOfService: Yup.boolean().oneOf(
      [true],
      "Please Accept Terms and Conditions of Service"
    )
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(response => {
        setStatus(response.data);
        resetForm();
      })
      .catch(error => {
        console.log("error", error);
      });
  }
});

const OnboardingForm = formikCom(UserForm);

export default OnboardingForm;

// import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";

// // import styled from "styled-components";

// // const tabBox = styled.div`
// //   margin: 5px 5px 5px 5px;
// //   padding: 5px 5px 5px 5px;
// //   width: 200px;
// //   text-align: center;
// //   border: 2px solid yellow;
// //   `;

// export default function TabNav() {
//   return (
//     <div class="tab-menu">
//       <NavLink exact activeClassName="active" to={"/"}>
//         <a class="tabpage">Home</a>
//       </NavLink>
//       <NavLink exact activeClassName="active" to={"/characters/"}>
//         <a class="tabpage">Characters</a>
//       </NavLink>
//       <NavLink exact activeClassName="active" to={"/locations/"}>
//         <a class="tabpage">Locations</a>
//       </NavLink>
//       <NavLink exact activeClassName="active" to={"/episodes/"}>
//         <a class="tabpage">Episodes</a>
//       </NavLink>
//     </div>
//   );
// }