import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAuthedUser, } from '../actions/authedUser';
 
class Logout extends Component {


    render() {

        const { dispatch } = this.props
        
        localStorage.removeItem('authedUser');

        dispatch(handleAuthedUser(''))

        return <Redirect to='/' />
    }
}

// function mapStateToprops(state){
//     return {
//         state
//     }
// }

export default connect()(Logout)

