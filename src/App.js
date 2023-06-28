import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState(
    {
      firstname: "",
      lastname: "",
      email: "",
    }
    );

    

    const handleFirstNameInputChange = (event) => {
      setValues({
        ...values,
        firstname: event.target.value,
      });
    };
    
    const handleLastNameInputChange = (event) => {
      setValues({
        ...values,
        lastname: event.target.value,
      });
    };
    
    const handleEmailNameInputChange = (event) => {
      setValues({
        ...values,
        email: event.target.value,
      });
    };
    
    const [submitted, setSubmitted] = useState (false);
    const [valid, setValid] = useState (false);


    const handleSubmit = (event) => {
      event.preventDefault();
      if(values.firstname && values.lastname && values.email) {
        setValid(true);
      }
      setSubmitted(true);
    }
    
    return (
      <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
      {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}
      
      <input
      onChange={handleFirstNameInputChange}
      value={values.firstname}
      id="first-name"
      class="form-field"
      type="text"
      placeholder="First Name"
      name="firstName"
      />
      {/* Uncomment the next line to show the error message */}
      {submitted && !values.firstname ? <span id="first-name-error">Please enter a first name</span> : null}
      <input
      onChange={handleLastNameInputChange}
      value={values.lastname}
      id="last-name"
      class="form-field"
      type="text"
      placeholder="Last Name"
      name="lastName"
      />
      {/* Uncomment the next line to show the error message */}
      {submitted && !values.lastname ? <span id="last-name-error">Please enter a last name</span> : null}
      <input
      onChange={handleEmailNameInputChange}
      value={values.email}
      id="email"
      class="form-field"
      type="text"
      placeholder="Email"
      name="email"
      />
      {/* Uncomment the next line to show the error message */}
      {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}
      <button class="form-field" type="submit">
      Register
      </button>
      </form>
      </div>
      );
    }