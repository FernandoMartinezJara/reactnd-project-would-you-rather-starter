import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import middleware from './middleware';
import reducer from './reducers';

const store = createStore(reducer, middleware)
const rootElement = document.getElementById("root");

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    rootElement
);