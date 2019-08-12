import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger';
import {dataReducer, pageReducer} from './Reducer'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';



//Redux logger josta näkee tilamuutokset konsolissa
const logger = createLogger();

//Yhdistetään reducerit yhteen pääreduceriin
const rootReducer = combineReducers({pageReducer, dataReducer})

//Luodaan store reducereista ja yhdistetään siihen redux logger sekä thunk
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));

