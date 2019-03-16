import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BasicContainer from './containers/BasicContainer';
import SyncValidationContainer from './containers/SyncValidationContainer';
import LoginExample from './containers/LoginExample';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={BasicContainer}/>
            <Route path="/sync-validation" exact component={SyncValidationContainer}/>
            <Route path="/login" exact component={LoginExample}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
