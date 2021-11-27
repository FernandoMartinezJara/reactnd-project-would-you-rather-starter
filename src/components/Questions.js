import React, { Component } from 'react';
import { Panel,FlexboxGrid, Divider, Button, Form, RadioGroup, Radio } from 'rsuite';
import Logo from '../icons/logo.svg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.css';
 
class Questions extends Component {

  state = {
    text: '',
    toHome: false
  };

    render() {

      const { toHome } = this.state;

      if(toHome === true){
        return <Redirect to='/home' />
      }

      const { question, user } = this.props;

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
                        
                        <Form.Group controlId="radioList">
                          <RadioGroup name="radioList">
                            <Radio value={ optionOne.text }>{ optionOne.text }</Radio>
                            <Radio value={ optionTwo.text }>{ optionTwo.text }</Radio>
                          </RadioGroup>
                        </Form.Group>
                        
                        <Button
                            style={{ marginTop: 30 }}
                            type='submit'
                            appearance="ghost" block>
                                Submit
                        </Button>
                      
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Panel>

          </FlexboxGrid.Item>
        </FlexboxGrid>
      )
}
}

function mapStateToProps({question: questions, authedUser: authedUsers}, props) {
  const { id } = props.match.params;
  const question = id ? questions[id] : null
  const user = question ? authedUsers[question.author] : null

  return {
    question,
    user
  }
}

export default connect(mapStateToProps)(Questions)

