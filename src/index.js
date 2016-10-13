import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './Reducers/reducer';

/*
  Because we are using axios and async actions, we need to provide a middleware that takes care of this. It's rather simple, we just provide a thunk middleware to applyMiddleware function and we're good to go.
*/
const store = applyMiddleware(thunk)(createStore)(reducer);

/*
  Provide a store to pass down to components.
  In the App, pass down a function that dispatches an action, so you can pass it down to SearchChannel component, which is just a presentational component, that shouldn't have any logic inside of it.
*/

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
