import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
 
class Logout extends Component {

    render() {
        return <Redirect to='/' />
    }
}

function mapStateToprops(state){
    return {
        state
    }
}

export default connect(mapStateToprops)(Logout)

