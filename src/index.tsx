import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const epicMiddleware = createEpicMiddleware()

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
