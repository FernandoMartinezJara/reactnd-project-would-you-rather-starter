import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { NavMenu } from './NavMenu';
import { NewQuestion } from './NewQuestion';
import { LeaderBoard } from './LeaderBoard';
import { Questions } from './Questions';
import { Login } from './Login';
import NotFoundPage from './NotFoundPage';

import "rsuite/dist/rsuite.min.css";

const styles = {
  padding: 20
};

function App() {
  return (
      <BrowserRouter>
        <NavMenu />
        <div style={styles}>
          <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/add' element={ <NewQuestion /> } />
            <Route path='/leaderboard' element={ <LeaderBoard />} />
            <Route path='/questions/:id' element={ <Questions /> } />
            <Route path="*" element={ <NotFoundPage /> }/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;