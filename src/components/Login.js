import React, { Component } from 'react';
import { Panel, Button,FlexboxGrid, Form, ButtonToolbar, SelectPicker } from 'rsuite';
import Logo from '../icons/logo.svg';
import { Redirect } from 'react-router-dom';
import { handleAuthedUser, } from '../actions/authedUser';
import { connect } from 'react-redux';
 
class Login extends Component {

  constructor(props){
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this)
}

  state = {
    text: '',
    toHome: false
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { dispatch, id } = this.props;
    
    localStorage.setItem('authedUser', text);

    dispatch(handleAuthedUser(text))

    this.setState(() => ({
        text: '',
        toHome: id ? false : true
    }));
  }

  handleOnChange(e){
    const text = e;
    this.setState(() => ({
        text
    }));
  }

    render() {

      const { toHome, text } = this.state;

      if(toHome === true){
        return <Redirect to='/dashboard' />
      }

      return(
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Panel header="Welcome to the Would You Rather App!" shaded style={{ textAlign:'center'}}>
              <p>
                <small>
                  Please sign to continue
                </small>
              </p>
              
              <img src={ Logo } style={{ width:250 }} className='notFound' alt=""></img>

                <Form fluid style={{ marginTop:30 }}>
                    
                    <Form.Group>
                      <Form.ControlLabel>Select User</Form.ControlLabel>
                          <SelectPicker
                            block
                            value={text}
                            placeholder="Select User"
                            data={
                              this.props.users &&
                                Object.keys(this.props.users).map(userId =>(
                                  {
                                    label: this.props.users[userId].name,
                                    value: userId,
                                    role: "master"
                                  })) 
                            }
                            cleanable={false}
                            onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group>
                      <ButtonToolbar>
                        <Button
                          disabled={ text === '' } 
                          type='submit'
                          onClick={ this.handleLogin }
                          appearance="primary" block>Sign in</Button>
                      </ButtonToolbar>
                    </Form.Group>

                  </Form>
            </Panel>

          </FlexboxGrid.Item>
        </FlexboxGrid>
      )
}
}

function mapStateToProps({ users }) {
  return {
      users
  }
}

export default connect(mapStateToProps)(Login)

