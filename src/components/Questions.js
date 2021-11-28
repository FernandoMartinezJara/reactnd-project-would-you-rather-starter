import React, { Component } from 'react';
import { Panel,FlexboxGrid, Button, RadioGroup, Radio } from 'rsuite';
import Logo from '../icons/logo.svg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.css';
import { handleSaveQuestionAnswer } from '../actions/question';
 
class Questions extends Component {

  state = {
    radioSelected: '',
    toResults: false
  };

  handleSubmit(e){
    e.preventDefault();
    
    const { dispatch, question, authedUser } = this.props;

    const { radioSelected } = this.state;

    dispatch(handleSaveQuestionAnswer(authedUser, question.id, radioSelected))

    this.setState({
      toResults: true
    })
  }

  handleSelectAnswer(radioSelected){
    this.setState({
      radioSelected
    })
  }

    render() {

      const { toResults, radioSelected } = this.state;
      const { question, user, authedUser } = this.props;

      if(!question)
        return(
          <FlexboxGrid justify='center' style={{ marginTop:10 }}>
            <FlexboxGrid.Item colspan={24}>
              <Panel shaded style={{ textAlign:"center" }}>
                <h3>Loading...</h3>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        )
      
      const { optionOne, optionTwo } = question
      const answeredPoll = optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser);

      if(toResults === true || answeredPoll ){
        return <Redirect to={`/results/${question.id}`} />
      }

      const name = !!user ? user.name : '';

      return(
        <FlexboxGrid justify='center' style={{ marginTop:10 }}>
        
          <FlexboxGrid.Item colspan={12}>
              <Panel header={`${ name } Asked: `} shaded style={{ textAlign:"start" }}>
                <FlexboxGrid>
                    
                    <FlexboxGrid.Item colspan={10} style={{ justifyContent: 'center' }}>
                        <img src={ Logo } style={{ width:150, verticalAlign:'center', alignContent:'center' }} className='notFound' alt=""></img>
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item colspan={14} className='dividerFullHeigth'>
                        
                        <h4><b>Would you rather...</b></h4>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                          <RadioGroup 
                            name="radioList"
                            value={ radioSelected } 
                            onChange={ (e) => this.handleSelectAnswer(e)}>
                            <Radio value='optionOne'> { optionOne.text } </Radio>
                            <Radio value='optionTwo'> { optionTwo.text } </Radio>
                          </RadioGroup>

                          <Button
                              style={{ marginTop: 30 }}
                              type='submit'
                              appearance="ghost" 
                              block
                              disabled={ radioSelected === '' }>
                                  Submit
                          </Button>
                        </form>
                      
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Panel>

          </FlexboxGrid.Item>
        </FlexboxGrid>
      )
}
}

function mapStateToProps({question: questions, users, authedUser}, props) {


  const { id } = props.match.params;
  const question = id ? questions[id] : null
  const user = question ? users[question.author] : null

  return {
    question,
    user,
    authedUser
  }
}

export default connect(mapStateToProps)(Questions)

