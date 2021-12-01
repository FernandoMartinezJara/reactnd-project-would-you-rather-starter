import React, { Component } from 'react';
import { Panel,FlexboxGrid, Avatar, Badge} from 'rsuite';

class Leader extends Component {

    render() {
      
      const { avatarURL, name, position, nQuestions, nAnswers } = this.props;
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

export default Leader

