import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { auth, createUser, storeUserData, signInWithGoogle } from '../firebase.mjs';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import './Css/Login.css';

const homeBarItems = [
  { pagePath: '/about', imgDesc: 'About Page', imgPath: '../../public/img/information.png' },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log("Auth state changed:", firebaseUser);
      setIsLoading(false);
      if (firebaseUser) {
        setIsLoggedIn(true);
        navigate('/character_creation');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be valid')
      .min(5, 'Email is too short')
      .max(30, 'Email is too long')
      .required('Email is Required'),
    username: Yup.string()
      .min(5, 'Username must be at least 5 characters')
      .max(12, 'Username may be no longer than 12 characters')
      .required('Username is Required'),
    password: Yup.string()
      .min(5, 'Password must be at least 5 characters')
      .max(15, 'Password may be no longer than 15 characters')
      .required('Password is Required'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    age: Yup.number()
      .positive('Age must be a positive number')
      .integer('Age must be a whole number')
      .min(5, 'Your age must be at least 5 years old')
      .max(120, 'Your age can be no higher than 120 years old')
      .required('Required'),
    gender: Yup.string()
      .oneOf(['Male', 'Female', 'None'], 'You must choose an option')
      .required('Gender is Required'),
  });

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(navigate);
  };

  const submitHandler = async (values) => {
    try {
      if (isSignUp) {
        // Sign up logic
        await createUser(values.email, values.password);
        await storeUserData(values.username + values.age, values.email, values.username, values.age, values.gender);
      } else {
        // Attempt to sign in with email and password
        await signInWithEmailAndPassword(auth, values.email, values.password);

        // Check if the user is authenticated
        const user = auth.currentUser;
        console.log("Current user after sign in attempt:", user);

        if (user) {
          console.log("Authentication successful for:", values.email);
          navigate('/character_creation');
        } else {
          console.error("Authentication failed");
        }
      }
    } catch (error) {
      console.error("Authentication Error", error.code, error.message);
    }
  };


  const loginForm = isLoading ? (
    <p>Loading...</p>
  ) : isLoggedIn ? (
    <div>
      <p>You are already logged in. Redirecting...</p>
    </div>
  ) : (
    <Formik
      initialValues={{
        email: '',
        username: '',
        password: '',
        confirm_password: '',
        age: '',
        gender: '',
      }}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      <Form id="login-container" layout="vertical" className="container my-5">
        <div id="desc-title" className="text-center">
          <h1 className="display-5">Complacara Conundrum™ Initialization: </h1>
          <p>To begin the game, we will need some information about you</p>
        </div>

        {isSignUp && (
          <>
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
          </>
        )}

        {!isSignUp && (
          <div className="form-group">
            <label>Email:</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
        )}

        <div className="form-group">
          <label>Password:</label>
          <Field name="password" type="password" className="form-control" />
          <ErrorMessage name="password" component="div" className="text-danger" />
        </div>

        {isSignUp && (
          <>
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
          </>
        )}

        <button id="info-submit" type="submit" className="btn btn-dark mt-3 mb-3 pb-2">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </Form>
    </Formik>
  );

  return (
    <div className="container-fluid min-vh-100" id="login-page">
      <Header navOptions={homeBarItems} isLoggedIn={isLoggedIn} isGoogleSignIn={false} />
      {loginForm}
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <button onClick={handleToggle}>
        {isSignUp ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up'}
      </button>
      <Footer />
    </div>
  );
}
