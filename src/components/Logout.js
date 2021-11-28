import React from 'react';
import { Redirect } from 'react-router-dom';
 
const Logout = () => {
    localStorage.removeItem('authedUser')
    return <Redirect to='/' />
}

export default Logout

