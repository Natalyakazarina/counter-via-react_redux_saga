import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import createSagaMiddleware from 'redux-saga';

import counterSaga from './sagas/counterSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(counterSaga);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();