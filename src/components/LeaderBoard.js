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
                                users.map((id, i ) =>(
                                    <Leader 
                                        key={id} 
                                        position={i} 
                                        id={ id }/>))
                        }
                    </Panel>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        )
    }
}

function mapStateToProps({ users }){
    
    const _users = Object.keys(users)
        .sort((a, b) => 
            (Object.keys(users[b].answers).length - Object.keys(users[a].answers).length) + 
            (users[b].questions.length - (users[a].questions.length )));

    return {
        users: _users
    }
}

export default connect(mapStateToProps)(LeaderBoard)