import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'rsuite';
import 'rsuite/dist/rsuite';

const _NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
  <Link ref={ref} to={href} {...rest}>
    {children}
  </Link>
));

class NavMenu extends Component {

  render(){
  
    const { authedUser } = this.props;
  
    return (
      <Navbar>
        <Nav>
          <Nav.Item as={_NavLink} href="/dashboard">Home</Nav.Item>
          <Nav.Item as={_NavLink} href="/add">New Question</Nav.Item>
        </Nav>

        <Nav pullRight>
            <Nav.Item as={_NavLink} href="/logout">LogOut</Nav.Item>
        </Nav>

        <Nav pullRight>
          <Nav.Item >{ authedUser && `Hello ${ authedUser }` }</Nav.Item>
        </Nav>

      </Navbar>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NavMenu)