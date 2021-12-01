import { Component } from "react";
import { Redirect, Route } from "react-router-dom";

class PrivateRoute extends Component{ 

    render(){

        const { path, component, location, ...rest } = this.props
        
        localStorage.setItem('path', location.pathname)      
        
        const isAutheduser =  localStorage.getItem('authedUser')
    
        return (

            !!isAutheduser
                ? <Route {...rest} path={ path } component={  component } />
                : <Redirect to="/" />
        )

    }

}

export default PrivateRoute