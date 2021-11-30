import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import Dasboard  from './Dashboard';
import NewQuestion from './NewQuestion';
import Logout from './Logout';
import LeaderBoard from './LeaderBoard';
import Questions from './Questions';
import Login from './Login';
import NotFoundPage from './NotFoundPage';
import Results from './Results';
import PrivateRoute from './PrivateRoute';

class Routes extends Component {

  render(){
      return (
        <Switch>
          <Route path='/' exact component={ Login } />
          <PrivateRoute path='/logout' component={ Logout } />
          <PrivateRoute path='/dashboard' component={ Dasboard } />
          <PrivateRoute path='/add' component={ NewQuestion } />
          <PrivateRoute path='/leaderboard' component={ LeaderBoard } />
          <PrivateRoute path='/questions/:id' component={ Questions } />
          <PrivateRoute path='/results/:id' component={ Results } />
          <Route component={ NotFoundPage } />
        </Switch>
    );
  }
}

export default Routes