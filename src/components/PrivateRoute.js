import { Component } from "react";
import { Redirect, Route } from "react-router-dom";

class PrivateRoute extends Component{ 

    render(){

        const { path, component, ...rest } = this.props

        const isAutheduser =  localStorage.getItem('authedUser')
    
        return (

            isAutheduser 
                ? <Route {...rest} path={ path } component={  component } />
                : <Redirect to="/" />
        )

    }

}

export default PrivateRoute