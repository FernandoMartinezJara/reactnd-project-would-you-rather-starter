import React, { Component } from 'react';
import { Panel,FlexboxGrid, Divider, Button } from 'rsuite';
import Logo from '../icons/logo.svg';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Question extends Component {

  state = {
    text: '',
    toHome: false
  };

  toDetail = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/questions/${id}`)
  }

    render() {

      const { toHome } = this.state;
      if(toHome === true){
        return <Redirect to='/home' />
      }
      
      const { question, user, id  } = this.props;

      //if(!user || !id) return null //validar spread en reducer para user o id

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
        
      const name = user ? user.name : ''
      const optionOne = question ? question.optionOne.text : question.optionTwo.text

      return(
        <FlexboxGrid justify='start' style={{ marginTop:10 }}>
          <FlexboxGrid.Item colspan={24}>
            <Panel header={`${ name } Asked: `} shaded style={{ textAlign:"start" }}>
                <FlexboxGrid>
                    <FlexboxGrid.Item colspan={8}>
                        <img src={ Logo } style={{ width:100 }} className='notFound' alt=""></img>
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item colspan={4}>
                        <Divider vertical style={{ height: "100px", width: "1" }} />
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item colspan={12}>
                        <p>
                            <b>Would you rather</b>
                        </p>
                        <p>
                            <small>{ optionOne } ...</small>
                        </p>
                        
                        <p>
                            <Button
                                type='button'
                                onClick={(e) => this.toDetail(e,  id) }
                                appearance="ghost" block>
                                    View Poll
                            </Button>
                        </p>

                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Panel>

          </FlexboxGrid.Item>
        </FlexboxGrid>
      )
}
}

function mapStateToProps({ question: questions, authedUser },{ id }) {
  
  const question = questions[id];
  const user = question ? authedUser[question.author] : null;

  return {
    id,
    user,
    question
  }
}

export default withRouter(connect(mapStateToProps)(Question))

