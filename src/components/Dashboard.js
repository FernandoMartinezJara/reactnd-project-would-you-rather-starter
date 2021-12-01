import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, FlexboxGrid, Panel } from 'rsuite';
import { handleSetQuestionFilter } from '../actions/questionFilter';
import Question from './Question';

class Dashboard extends Component {

     handleFilterQuestion(e){
        e.preventDefault();
        const { dispatch } = this.props
        dispatch(handleSetQuestionFilter(e.target.id))
    }

    render(){

        const { questions, questionFilter } = this.props;

        return (

            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={12}>
                    <Nav activeKey={ questionFilter } appearance='tabs'>
                        <Nav.Item onClick={(e) => this.handleFilterQuestion(e)} id='unAnswered' eventKey="unAnswered">Unanswered Question</Nav.Item>
                        <Nav.Item onClick={(e) => this.handleFilterQuestion(e)} id='answered' eventKey="answered">Answered Questions</Nav.Item>
                    </Nav>
                    <Panel shaded style={{ textAlign:'center', width:"100%"}}>
                        {
                            questions
                                ?
                                questions.map((id) =>(
                                    <Question 
                                        key={id} 
                                        id={ id }/>
                                ))
                                :
                                <h4>Doesnt Exists questions</h4>
                        }
                    </Panel>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        )
    }
}

function mapStateToProps({ question, questionFilter, authedUser }){

    const _questions = Object.keys(question)
        .sort((a,b) => question[b].timestamp - question[a].timestamp)

    let quest;
    
    if(_questions.length !== 0){
        if(questionFilter !== null && questionFilter === 'answered'){
            quest = _questions.filter((a) => 
                question[a].optionOne.votes.length > 0 || 
                question[a].optionTwo.votes.length > 0)
        }
        else{
            quest = _questions.filter((a) => 
                !question[a].optionOne.votes.length && 
                !question[a].optionTwo.votes.length)
        }
    }

    questionFilter = !questionFilter ? 'unAnswered' : questionFilter

    return {
        questions: quest,
        questionFilter,
        authedUser
    }
}


export default connect(mapStateToProps)(Dashboard)