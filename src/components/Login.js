import React from 'react';
import { Panel, InputPicker, Button } from 'rsuite';

const data = [
    {
      "label": "Eugenia",
      "value": "Eugenia",
      "role": "Master"
    },
    {
      "label": "Kariane",
      "value": "Kariane",
      "role": "Master"
    }
  ]
 

export const Login = () => {
    return (
        <Panel header="Welcome to the Would You Rather App!" shaded >
          <p>
            <small>
              Please sign to continue
            </small>
          </p>
          
          <img src="https://via.placeholder.com/240x240" height="240" />
          
          <p>Sign In</p>

          <InputPicker data={data} block />
          <Button appearance="primary" block>Block</Button>

        </Panel>
    )
}