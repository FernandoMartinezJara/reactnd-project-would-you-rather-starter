import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlexboxGrid, Panel, Form, ButtonToolbar, Button, Divider,Input } from 'rsuite';
import { handleAddQuestion } from '../actions/question'
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {
    constructor(props){
        super(props);
        this.handleOnChangeTextOne = this.handleOnChangeTextOne.bind(this);
        this.handleOnChangeTextTwo = this.handleOnChangeTextTwo.bind(this);
    }
    
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    };

    handleSubmit(e){
        e.preventDefault();
        
        const { dispatch, authedUser } = this.props;

        const { optionOneText, optionTwoText } = this.state;

        dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser))

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: true
        }));
    }

    handleOnChangeTextOne(e){
      const optionOneText = e;
      this.setState(() => ({
        optionOneText
      }))
    }

    handleOnChangeTextTwo(e){
      const optionTwoText = e;
      this.setState(() => ({
        optionTwoText
      }))
    }

    render (){
     
        localStorage.setItem('redirectFromStorage', 'false')  

        const { toHome } = this.state

        if(toHome === true){
          return <Redirect to='/dashboard' />
        }

        const { optionOneText, optionTwoText } = this.state

        return(
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel shaded style={{ textAlign:'center'}}>
                  
                    <h3>Create New Question</h3>
                    <Divider/>
    
                    <Form fluid style={{ marginTop:30 }}>
                        
                        <Form.Group>
                          <Input
                            value={optionOneText}
                            name='optionOne'
                            onChange={(e) => this.handleOnChangeTextOne(e) }
                            placeholder="Enter option one text here" />
                        </Form.Group>

                        <Form.Group>
                            <p><small><b>OR</b></small></p>
                        </Form.Group>

                        <Form.Group>
                          <Input
                            value={optionTwoText}
                            onChange={ (e) => this.handleOnChangeTextTwo(e) }
                            name='optionTwo'
                            placeholder="Enter option two text here" />
                        </Form.Group>
    
                        <Form.Group>
                          <ButtonToolbar>
                            <Button
                              disabled={false}
                              type='submit'
                              onClick={(e) => this.handleSubmit(e) }
                              appearance="primary" block>Submit</Button>
                          </ButtonToolbar>
                        </Form.Group>
                    </Form>
                </Panel>
    
              </FlexboxGrid.Item>
            </FlexboxGrid>
          )
    }
}

function mapStateToProps({ authedUser}) {

  return {
      authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)