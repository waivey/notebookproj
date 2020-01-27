import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux';



const middleware = [ thunk ];

const store = createStore(reducer, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

// Testing the dispatch
// store.dispatch(fetchProjects()).then(() => console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));


