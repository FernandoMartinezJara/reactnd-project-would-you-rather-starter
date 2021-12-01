import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlexboxGrid, Panel } from 'rsuite';
import Leader from './Leader';

class LeaderBoard extends Component  {
    render(){
        
        const { users } = this.props;

        return (

            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={12}>
                    <Panel shaded style={{ textAlign:'center', width:"100%"}}>
                        {
                            users
                            &&  
                                users.map((usr, i ) =>(
                                    <Leader 
                                        key={i} 
                                        position={i + 1} 
                                        name={usr.name}
                                        avatarURL={usr.avatarURL}
                                        nQuestions={usr.nQuestions}
                                        nAnswers={usr.nAnswers} />
                                    ))
                        }
                    </Panel>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        )
    }
}

function mapStateToProps({ users, question: questions }){

    const _users =  Object.keys(users).map(usr => {

        const nQuestions = Object.keys(questions)
            .filter(q => questions[q].author === usr).length

        const nAnswers = Object.keys(questions)
            .filter(q => 
                questions[q].optionOne.votes.includes(usr) || 
                questions[q].optionTwo.votes.includes(usr) ).length

            return {
                name: users[usr].name,
                avatarURL: users[usr].avatarURL,
                nQuestions,
                nAnswers
            }
    })
    .sort((a, b) => 
        (b.nQuestions - a.nQuestions) +
        (b.nAnswers - a.nAnswers)
    )

    return {
        users: _users
    }
}

export default connect(mapStateToProps)(LeaderBoard)