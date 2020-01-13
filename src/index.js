// React Core modules
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';

import App from './App'

// Redux modules
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './store/reducers/appReducer';

import { Provider } from 'react-redux';


const middleware = [thunk];

const store = createStore(
  appReducer,
  compose( applyMiddleware(thunk) )
);


serviceWorker.register();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
