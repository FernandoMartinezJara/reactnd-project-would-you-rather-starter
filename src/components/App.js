import { BrowserRouter } from 'react-router-dom';
import NavMenu from './NavMenu';
import { connect } from 'react-redux';
import "rsuite/dist/rsuite.min.css";
import { Component } from 'react';
import LoadingBar from 'react-redux-loading-bar';
import Routes from './Routes';
import { handleInitData } from '../actions/shared';

const styles = {
  padding: 20
};

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitData());
  }

  render(){
      const { loading } = this.props;

      return (

        <BrowserRouter>

          <LoadingBar />

          <NavMenu />

          <div style={styles}>
            {
              loading === true 
                ? null
                : <Routes/>
            }
          </div>

        </BrowserRouter>
    );
  }
}

function mapStateToProps({ loading, authedUser }){

  return {
    loading,
    authedUser
  }
}

export default connect(mapStateToProps)(App);