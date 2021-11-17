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

        // <Nav>
        //     <Nav.Item as={_NavLink} href="/">Home</Nav.Item>
        //     <Nav.Item as={_NavLink} href="/add">New Question</Nav.Item>
        //     <Nav.Item as={_NavLink} href="/leaderboard">Leader Board</Nav.Item>
        // </Nav>        

        <Navbar>
        <Navbar.Brand href="#">
          Udacity
        </Navbar.Brand>
        <Nav>
          <Nav.Item as={_NavLink} href="/">Home</Nav.Item>
          <Nav.Item as={_NavLink} href="/add">New Question</Nav.Item>
        </Nav>
        <Nav pullRight>
            {/* <Nav.Item icon={<Cog />}>Settings</Nav.Item> */}
            <Nav.Item>LogOut</Nav.Item>
        </Nav>
      </Navbar>
    )
}
