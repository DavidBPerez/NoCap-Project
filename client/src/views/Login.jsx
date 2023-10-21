import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import './Css/Login.css';

const homeBarItems = [{ pagePath: "/about", imgDesc: "About Page", imgPath: "../../public/img/information.png" }];

export default function LoginPage() {
  const navigate = useNavigate();

  // Defines schema for input forms (client-side)
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email must be valid")
      .min(5, "Email is too short")
      .max(30, "Email is too long")
      .required("Email is Required"),
    username: Yup.string()
      .min(5, "Username must be at least 5 characters")
      .max(12, "Username may be no longer than 12 characters")
      .required("Username is Required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .max(15, "Password may be no longer than 15 characters")
      .required("Password is Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    age: Yup.number()
      .positive("Age must be a positive number")
      .integer("Age must be a whole number")
      .min(5, "Your age must be at least 5 years old")
      .max(120, "Your age can be no higher than 120 years old")
      .required("Required"),
    gender: Yup.string()
      .oneOf(["Male", "Female", "None"], "You must choose an option")
      .required("Gender is Required")
  });

  // login form components -- might move as seperate component
  const loginForm = (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        confirm_password: "",
        age: "",
        gender: ""
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
        // **POST VALUES TO SERVER
        navigate("/character_creation");
      }}
    >
      <Form id="login-container" layout="vertical" className="container my-5">
        <div id="desc-title" className="text-center">
          <h1 className="display-5">Complacara Conundrum™ Initialization: </h1>
          <p>
            To begin the game, we will need some information about you
          </p>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <Field name="email" type="email" className="form-control" />
          <ErrorMessage name="email" component="div" className="text-danger" />
        </div>

        <div className="form-group">
          <label>Username:</label>
          <Field name="username" type="text" className="form-control" />
          <ErrorMessage name="username" component="div" className="text-danger" />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <Field name="password" type="password" className="form-control" />
          <ErrorMessage name="password" component="div" className="text-danger" />
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <Field name="confirm_password" type="password" className="form-control" />
          <ErrorMessage name="confirm_password" component="div" className="text-danger" />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <Field name="age" type="number" min="5" max="120" className="form-control" />
          <ErrorMessage name="age" component="div" className="text-danger" />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <Field name="gender" as="select" className="form-control">
            <option value="" label="Select Gender" />
            <option value="Male" label="Male" />
            <option value="Female" label="Female" />
            <option value="None" label="Rather Not Say" />
          </Field>
          <ErrorMessage name="gender" component="div" className="text-danger" />
        </div>

        <button id="info-submit" type="submit" className="btn btn-dark mt-3 mb-3 pb-2">Submit</button>
      </Form>
    </Formik>
  );

  return (
    <div className="container-fluid min-vh-100" id="login-page">
      <Header navOptions={homeBarItems} />
      {loginForm}
      <Footer />
    </div>
  );
}
