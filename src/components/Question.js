import React, { Component } from 'react';
import { Panel,FlexboxGrid, Button } from 'rsuite';
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

      if(!question || !user)
        return null

      const name = user ? user.name : '';
      const avatarURL = user ? user.avatarURL : '';
      const optionOne = question ? question.optionOne?.text : '';

      return(
        
        <FlexboxGrid justify='start' style={{ marginTop:10 }}>
          <FlexboxGrid.Item colspan={24}>
            <Panel header={`${ name } Asked: `} shaded style={{ textAlign:"start" }}>
                <FlexboxGrid>
                    <FlexboxGrid.Item colspan={10}>
                        <img src={ avatarURL } style={{ width:100 }} className='notFound' alt=""></img>
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item colspan={14} >
                      <div className='dividerFullHeigth'>

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

                      </div>


                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Panel>

          </FlexboxGrid.Item>
        </FlexboxGrid>
      )
}
}

function mapStateToProps({ question: questions, users },{ id }) {
  const question = questions[id];
  const user = question ? users[question.author] : null;

  return {
    id,
    user,
    question
  }
}

export default withRouter(connect(mapStateToProps)(Question))

