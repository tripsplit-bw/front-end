import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import CreateAccount from './components/register/CreateAccount';
import SignIn from './components/login/SignIn';
import Trip from './components/Trip';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/createaccount' component={CreateAccount} />
      <Route path='/signIn' component={SignIn} />
      {/* <Route path='/trip' component={Trip} /> */}
      <Route path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
