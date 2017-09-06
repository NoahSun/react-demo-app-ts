import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

import App from './App';

import { } from './reducer/index';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const epicMiddleware = createEpicMiddleware();
const store = createStore(epicMiddleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
