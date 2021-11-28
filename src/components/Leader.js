import React, { Component } from 'react';
import { Panel,FlexboxGrid, Avatar, Badge} from 'rsuite';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Leader extends Component {

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
      
      const { user, position  } = this.props;
      const { name, questions, answers } = user;
      const avatarURL = user ? user.avatarURL : '';
      const nQuestions = questions.length;
      const nAnswers = Object.keys(answers).length;
      const score = nQuestions + nAnswers;
      
      return(
        
        <FlexboxGrid justify='start' style={{ marginTop:10 }}>
           <Badge content={ `Nº ${ position }` } color='green'/>
          <FlexboxGrid.Item colspan={24}>
            <Panel >
                <FlexboxGrid>

                    <FlexboxGrid.Item colspan={5}>
                        <img src={ avatarURL } style={{ width:100 }} className='notFound' alt=""></img>
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item colspan={14} >
                        <Panel header={ name } bordered={false} style={{ textAlign:"center" }}>
                        
                            <div  className='dividerFullHeigth'>
                                <p>
                                    <b>Answered questions</b>
                                    <small> { nAnswers } </small>
                                </p>
                                <p>
                                    <b>Created questions</b>
                                    <small> { nQuestions } </small>
                                </p>
                            </div>
                        </Panel>

                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item colspan={5} >
                        <Panel header='Score' bordered={false} style={{ textAlign:"center" }}>
                            <div  className='dividerFullHeigth'>
                                <Avatar style={{ background: '#edfae1', color: '#4caf50' }} circle>{ score }</Avatar>
                            </div>
                        </Panel>

                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Panel>

          </FlexboxGrid.Item>
        </FlexboxGrid>
      )
}
}

function mapStateToProps({ users },{ id, position }) {
  const user = users ? users[id] : null;

  return {
    user,
    position: position + 1
  }
}

export default connect(mapStateToProps)(Leader)

