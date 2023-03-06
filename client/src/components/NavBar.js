import React, { useContext } from "react";
import { Context } from "../index";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "green" }} to={SHOP_ROUTE}>
          Buy Device
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "green" }}>
            <Button
              style={{ color: "green" }}
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              style={{ color: "green" }}
              variant={"outline-light"}
              className="ms-3"
              onClick={() => {
                // navigate(LOGIN_ROUTE);
                logOut();
              }}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "green" }}>
            <Button
              style={{ color: "green" }}
              variant={"outline-light"}
              onClick={() => {
                navigate(LOGIN_ROUTE);
                // user.setIsAuth(true);
              }}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
