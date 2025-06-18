import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  InputGroup,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import { validPassword } from "./Regex";
import { login } from "../../actions/userActions";

function LoginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  },[userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    // You can validate the email and password here
    // if (!validPassword(pass1)) {
    //   setMessage("Password does not meet the required criteria");
    //   return;
    // }
    setMessage("");
    dispatch(login(email, pass1))
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <Row>
        <Col>
          <Card
            className="p-4 shadow-lg rounded-4"
            style={{ maxWidth: "450px", margin: "auto" }}
          >
            <Card.Header className="bg-dark text-white text-center rounded-top-4">
              <h2 className="mb-0">Login</h2>
            </Card.Header>
            <Card.Body>
              {message && (
                <Message
                  variant={message === "Sign Up Success" ? "success" : "danger"}
                >
                  {message}
                </Message>
              )}

              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <i className="fa fa-envelope"></i>
                    </InputGroup.Text>
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
                    <InputGroup.Text>
                      <i className="fa fa-lock"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      value={pass1}
                      onChange={(e) => setPass1(e.target.value)}
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
                  Password must include at least one uppercase letter, one
                  lowercase letter, one digit, one special character, and be 5+
                  characters.
                </small>

                <div className="d-grid">
                  <Button type="submit" className="btn-success">
                    Login
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-3">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginScreen;
