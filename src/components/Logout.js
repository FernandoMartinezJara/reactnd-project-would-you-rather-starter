import React from 'react';
import { Redirect } from 'react-router-dom';
 
const Logout = () => {
    localStorage.removeItem('authedUser')
    localStorage.setItem('path', "/dashboard")
    
    return <Redirect to='/' />
}

export default Logout

