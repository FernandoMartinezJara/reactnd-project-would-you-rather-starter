import React, { Component } from 'react';
import { Panel,FlexboxGrid, Divider, Progress, Badge } from 'rsuite';
import Logo from '../icons/logo.svg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.css'
 
class YourResult extends Component {

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

      let optioneOnePercent = 0;
      let optionTwoPercent = 0;
      let totalVotes = 0;
      const optionOneVotes = optionOne.votes.length;
      const optionTwoVotes = optionTwo.votes.length;
      totalVotes =  optionOneVotes + optionTwoVotes;
      optioneOnePercent = optionOneVotes * 100 / totalVotes;
      optionTwoPercent  = optionTwoVotes * 100 / totalVotes;
      
      const name = !!user ? user.name : '';
      const userId = !!user ? user.id : '';
      
      const optionOneSelected = optionOne.votes.includes(userId);
      const optionTwoSelected = optionTwo.votes.includes(userId);

      console.log(optionOne.votes)
      console.log(optionTwo.votes)
      console.log(optionOneSelected, optionTwoSelected)

      return(
        <FlexboxGrid justify='center' style={{ marginTop:10 }}>
        
          <FlexboxGrid.Item colspan={12}>
              <Panel header={`${ name } Asked: `} shaded style={{ textAlign:"start" }}>
                <FlexboxGrid>
                    
                    <FlexboxGrid.Item colspan={10}>
                        <img src={ Logo } style={{ width:150 }} alt=""></img>
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item colspan={14} className='dividerFullHeigth'>
                        
                        <h4><b>Results:</b></h4>

                        <div style={{ marginTop:20 }}>
                          { optionOneSelected && <Badge content="Your Vote" />}

                          <Panel header={ optionOne.text } shaded style={{ textAlign:"start", backgroundColor: optionOneSelected && 'lightgreen' }} >
                            <Progress.Line percent={ !!optioneOnePercent ? optioneOnePercent : 0 } showInfo={true}  />
                            <p>{`${optionOneVotes} of ${totalVotes} votes`}</p>
                          </Panel>
                        </div>

                        <div style={{ marginTop:20 }}>
                          
                          { optionTwoSelected && <Badge content="Your Vote" />}

                          <Panel header={ optionTwo.text } shaded style={{ textAlign:"start", backgroundColor: optionTwoSelected && 'lightgreen' }}>
                            <Progress.Line percent={ !!optionTwoPercent ? optionTwoPercent : 0 } showInfo={true} />
                            <p>{`${optionTwoVotes} of ${totalVotes} votes`}</p>
                          </Panel>
                        </div>
                      

                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Panel>

          </FlexboxGrid.Item>
        </FlexboxGrid>
      )
}
}

function mapStateToProps({question: questions, users}, props) {
  const { id } = props.match.params;
  const question = id ? questions[id] : null
  const user = question ? users[question.author] : null

  return {
    question,
    user
  }
}

export default connect(mapStateToProps)(YourResult)

