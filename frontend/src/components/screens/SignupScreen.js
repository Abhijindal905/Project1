import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  InputGroup
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Message from "../Message";
import { validPassword } from "./Regex";

function SignupScreen() {
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (pass1 !== pass2) {
      setError("Passwords do not match");
      return;
    }
    if (!validPassword.test(pass1)) {
      setError("Password criteria does not match");
      return;
    }

    setError("Sign Up Success");
    navigate('/login'); 
    // TODO: Add signup logic
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Row>
        <Col>
          <Card className="p-4 shadow-lg rounded-4" style={{ maxWidth: "450px", margin: "auto" }}>
            <Card.Header className="bg-dark text-white text-center rounded-top-4">
              <h2 className="mb-0">Create Account</h2>
            </Card.Header>
            <Card.Body>
              {error && (
                <Message variant={error === "Sign Up Success" ? "success" : "danger"}>
                  {error}
                </Message>
              )}

              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><i className="fa fa-user"></i></InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><i className="fa fa-user"></i></InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter Last Name"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><i className="fa fa-envelope"></i></InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><i className="fa fa-lock"></i></InputGroup.Text>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      value={pass1}
                      onChange={(e) => setPass1(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><i className="fa fa-lock"></i></InputGroup.Text>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={pass2}
                      onChange={(e) => setPass2(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Check
                  type="checkbox"
                  label="Show Password"
                  onChange={() => setShowPassword(!showPassword)}
                  className="mb-3"
                />

                <small className="text-muted d-block mb-3">
                  Password must include at least one uppercase letter, one lowercase letter, one digit, one special character, and be 5+ characters.
                </small>

                <div className="d-grid">
                  <Button type="submit" className="btn-success">
                    Sign Up
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupScreen;
