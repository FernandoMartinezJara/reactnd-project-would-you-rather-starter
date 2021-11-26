import { BrowserRouter,Switch, Route } from 'react-router-dom';
import NavMenu from './NavMenu';
// import Routes from './Routes';
import { connect } from 'react-redux';
import "rsuite/dist/rsuite.min.css";
import { Component } from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitData } from '../actions/shared';


import Dashboard  from './Dashboard';
import NewQuestion from './NewQuestion';
import Logout from './Logout';
// import { LeaderBoard } from './LeaderBoard';
import Questions from './Questions';
import Login from './Login';
import NotFoundPage from './NotFoundPage';

const styles = {
  padding: 20
};

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitData());
  }

  render(){

      const authedUser = localStorage.getItem('authedUser');
      
      return (

        <BrowserRouter>
          <LoadingBar />
          
          { !!authedUser && <NavMenu /> }

          <div style={styles}>
            {
              this.props.loading === true 
                ? null
                :
                <Switch>
                <Route path='/' exact component={ Login } />
                <Route path='/logout' component={ Logout } />
                <Route path='/dashboard' component={ Dashboard } />
                <Route path='/add' component={ NewQuestion } />
                <Route path='/questions/:id' component={ Questions } />
                <Route component={ NotFoundPage } />
              </Switch>

            }
          </div>
        </BrowserRouter>
    );
  }
}

// function mapStateToProps({ authedUser }){
//   return {
//     authedUser
//   }
// }

export default connect()(App);