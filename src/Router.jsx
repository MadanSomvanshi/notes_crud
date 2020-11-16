import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import store from './store/store-config';
import { Provider } from 'react-redux';
import './assets/styles.scss';
import Left from './components/Left';

const DashboardComponent = props => <Dashboard history={props.history} />;

const LoginComponent = props => <Login history={props.history} />;

const Router = (props) => (
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={props => <LoginComponent {...props}/>}/>
        <Route path='/dashboard' render={props => <DashboardComponent {...props}/>} />
      </Switch>
    </BrowserRouter>
  </Provider>

)
export default Router;
