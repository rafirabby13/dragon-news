import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider.js";
import { toast } from "react-hot-toast";



const Register = () => {
  const { createUser , updateUserProfile, verifyEmail} = useContext(AuthContext);
  const [accepted, setAccepted]=useState(false);
  const [error, setError]=useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        setError('');
        handleVerification();
        toast.success('Please provide a verified email by google')
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile=(name, photoURL)=>{
    // const form = event.target;

    // const name = form.name.value;
    // const photoURL = form.photoURL.value;
    const profile={
      displayName:name ,
      photoURL:photoURL
    };
    updateUserProfile(profile)
    .then(()=>{
      console.log("updated");
    })
    .catch(error=>{
      console.error(error)
    })
  }
  const handleAccepted=(event)=>{
    setAccepted(event.target.checked);
  };
  const handleVerification=()=>{
    verifyEmail()
    .then(()=>{
      
    })
    .catch(error=>{
      console.error(error)
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image"
          name="photoURL"
          required
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        onClick={handleAccepted}
        label={<>Accept <Link to='/terms'> Terms and conditions</Link></>} />
      </Form.Group>
      <p>
        Already have a account? <Link to="/login"> Login</Link>
      </p>
      <p className="text-danger">{error}</p>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
