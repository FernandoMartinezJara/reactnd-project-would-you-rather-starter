import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import Home  from './Home';
import NewQuestion from './NewQuestion';
import Logout from './Logout';
import { LeaderBoard } from './LeaderBoard';
import Questions from './Questions';
import Login from './Login';
import NotFoundPage from './NotFoundPage';

class Routes extends Component {

  render(){
      return (
        <Switch>
            <Route path='/' exact component={ Login } />
            <Route path='/logout' component={ Logout } />
            <Route path='/home' component={ Home } />
            <Route path='/add' component={ NewQuestion } />
            <Route path='/leaderboard' component={ LeaderBoard } />
            <Route path='/questions/:id' component={ Questions } />
            <Route component={ NotFoundPage } />
          </Switch>
    );
  }
}

export default Routes