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

class Routes extends Component {

  render(){
      return (
        <Switch>
          <Route path='/' exact component={ Login } />
          <Route path='/logout' component={ Logout } />
          <Route path='/dashboard' component={ Dasboard } />
          <Route path='/add' component={ NewQuestion } />
          <Route path='/leaderboard' component={ LeaderBoard } />
          <Route path='/questions/:id' component={ Questions } />
          <Route path='/results/:id' component={ Results } />
          <Route component={ NotFoundPage } />
        </Switch>
    );
  }
}

export default Routes