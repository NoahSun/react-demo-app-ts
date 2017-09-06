/// <reference types="node" />

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, Dispatch, MapStateToPropsFactory, MapDispatchToPropsFactory } from 'react-redux';
import AllReducer from './reducer/index';

import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

// const mapStateToProps: MapStateToPropsFactory<> = (state: MapStateToPropsParam<>, ownProps:) => {
//   return {

//   }
// }

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  ...bindActionCreators({}, dispatch),
});

export default connect(null, mapDispatchToProps)(App);
