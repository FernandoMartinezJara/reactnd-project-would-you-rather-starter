import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'rsuite';
import 'rsuite/dist/rsuite';

const _NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));

export const NavMenu = () => {
    return (

        <Navbar>
        <Navbar.Brand href="#">
          Udacity
        </Navbar.Brand>
        <Nav>
          <Nav.Item as={_NavLink} href="/home">Home</Nav.Item>
          <Nav.Item as={_NavLink} href="/add">New Question</Nav.Item>
        </Nav>
        <Nav pullRight>
            <Nav.Item as={_NavLink} href="/logout">LogOut</Nav.Item>
        </Nav>
      </Navbar>
    )
}
