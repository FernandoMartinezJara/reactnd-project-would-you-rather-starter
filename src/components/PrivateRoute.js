import { Component } from "react";
import { Redirect, Route } from "react-router-dom";

class PrivateRoute extends Component{ 

    render(){

        const { path, component, location, ...rest } = this.props
        
        console.log(location)
        localStorage.setItem('path', location.pathname)      
        
        const isAutheduser =  localStorage.getItem('authedUser')

        const redirectFromStorage = localStorage.getItem('redirectFromStorage')?.toString()
    
        return (

            isAutheduser && redirectFromStorage === 'true'
                ? <Route {...rest} path={ path } component={  component } />
                : <Redirect to="/" />
        )

    }

}

export default PrivateRoute