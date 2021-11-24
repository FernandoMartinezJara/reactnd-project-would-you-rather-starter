import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, FlexboxGrid, Panel } from 'rsuite';
import Question from './Question';

class Home extends Component {
    render(){

        return (

            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={12}>
                    <Panel shaded style={{ textAlign:'center', width:"100%"}}>
                        <Nav appearance='tabs'>
                            <Nav.Item eventKey="home">Unanswered Question</Nav.Item>
                            <Nav.Item eventKey="news">Answered Questions</Nav.Item>
                        </Nav>
                        {
                            this.props.questions.map((id) =>(
                                <Question key={id} id={ id }/>
                            ))
                        }
                    </Panel>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        )
    }
}

function mapStateToProps({question}){
    
    return {
        questions: Object.keys(question).
            sort((a,b) => question[b].timestamp - question[a].timestamp)
    }
}


export default connect(mapStateToProps)(Home)