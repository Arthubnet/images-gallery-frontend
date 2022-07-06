import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: "#eeeeee",
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <a href="/">
          <Logo
            alt={props.title}
            style={{ maxWidth: "25rem", maxHeight: "4rem", cursor: "pointer" }}
          />
        </a>
      </Container>
    </Navbar>
  );
};

export default Header;
