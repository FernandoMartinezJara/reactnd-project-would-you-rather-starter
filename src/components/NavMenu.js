import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'rsuite';
import 'rsuite/dist/rsuite';
import { handleAuthedUser } from '../actions/authedUser';

const _NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
  <Link ref={ref} to={href} {...rest}>
    {children}
  </Link>
));

class NavMenu extends Component {

  logout(e) {

    const { dispatch } = this.props;

    sessionStorage.removeItem('authedUser')
    localStorage.setItem('path', "/dashboard")
    dispatch(handleAuthedUser(''));
  }

  render(){
  
    const { authedUser } = this.props;
  
    return (

      authedUser &&

      <Navbar>
        <Nav>
          <Nav.Item as={_NavLink} href="/dashboard">Home</Nav.Item>
          <Nav.Item as={_NavLink} href="/add">New Question</Nav.Item>
          <Nav.Item as={_NavLink} href="/leaderboard">LeaderBoard</Nav.Item>
        </Nav>

        <Nav pullRight>
            <Nav.Item as={_NavLink} onClick={(e) => this.logout(e)} href="/">LogOut</Nav.Item>
        </Nav>

        <Nav pullRight>
          <Nav.Item >{ authedUser && `Hello ${ authedUser }` }</Nav.Item>
        </Nav>

      </Navbar>
    )
  }
}

function mapStateToProps({ authedUser }){

  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NavMenu)