import React from 'react';

import './App.css';

import Header from './components/header/Header';
import CreateAccount from './components/register/CreateAccount';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateAccount />
    </div>
  );
}

export default App;
