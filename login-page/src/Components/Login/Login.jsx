import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class LoginForm extends Component {
  render() {
      return(
        <div className="form-container">
        <Form className="loginForm">
        <Form.Text><h4>Login to Fusion-Tracker.net</h4> 
        <br></br>
        </Form.Text>
        <Form.Group controlId="formBasicEmail">
          <Form.Label><p className="login-text">Email address</p></Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label><p className="login-text">Password</p></Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>&nbsp;
        <Button variant="warning" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
      ) 
}
}

export default LoginForm;