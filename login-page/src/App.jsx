import React from 'react';
import {LoginForm} from "./components/Login/LoginForm"
import {FusionNavBar} from './components/NavBar/FusionNavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <FusionNavBar />
      <header className="App-header">
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
