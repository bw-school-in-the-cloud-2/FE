import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import * as serviceWorker from './serviceWorker';


import './index.css';
import App from './App';
import { rootReducer } from './reducers';



const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >, document.getElementById('root')
);

// serviceWorker.unregister();