import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//IMPORT THE PROVIDER
import { Provider } from 'react-redux';
//IMPORT REDUCER
import { Reducer } from './reducers';
//IMPORT THE STORE
import { createStore } from 'redux';
//CREATE THE STORE
const store = createStore( Reducer );

ReactDOM.render(
    //LET THE PROVIDER HAVE ACESS TO THE STORE
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);


