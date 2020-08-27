import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';


import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import { volunteerReducer } from './reducers/volunteerReducer';



const store = createStore(
  volunteerReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >, document.getElementById('root')
);

serviceWorker.unregister();