import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BasicContainer from './containers/BasicContainer';
import SyncValidationContainer from './containers/SyncValidationContainer';
import LoginExample from './containers/LoginExample';
import BasicFormik from './containers/BasicFormik';
import FormikWithRedux from './containers/FormikWithRedux';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={BasicContainer} />
            <Route path="/sync-validation" exact component={SyncValidationContainer} />
            <Route path="/login" exact component={LoginExample} />
            <Route path="/formik/login" exact component={BasicFormik} />
            <Route path="/formik/redux" exact component={FormikWithRedux} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
