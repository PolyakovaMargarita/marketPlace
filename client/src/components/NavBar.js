import React, { useContext } from "react";
import { Context } from "../index";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "green" }} to={SHOP_ROUTE}>
          Buy Device
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "green" }}>
            <Button style={{ color: "green" }} variant={"outline-light"}>
              Admin Panel
            </Button>
            <Button
              style={{ color: "green" }}
              variant={"outline-light"}
              className="ms-3"
              onClick={() => user.setIsAuth(false)}
            >
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "green" }}>
            <Button
              style={{ color: "green" }}
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Login
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
