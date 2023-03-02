import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Login" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-2" placeholder="Enter your email..." />
          <Form.Control className="mt-2" placeholder="Enter your password..." />
          <Form className="d-flex justify-content-between mt-2 pe-3 ps-3">
            {isLogin ? (
              <div>
                Need <NavLink to={REGISTRATION_ROUTE}>registration</NavLink>
              </div>
            ) : (
              <div>
                <NavLink to={LOGIN_ROUTE}>Login</NavLink>
              </div>
            )}
            <Button variant={"outline-success"}>
              {isLogin ? "Enter" : "Registration"}
            </Button>
          </Form>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
