import React from 'react';
import {FusionNavBar} from './Components/NavBar/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {TestPage} from "./Components/Test/Test"
import {AndAnotherOne} from "./Components/AnotherOne/AnotherOne"
import {AnothaPage} from "./Components/AndAnotha/AndAnotha"
import './App.css';

function App() {
  return (
    <div>
 <Router>
 <FusionNavBar />
   <Route path="/logon" component={TestPage}/>
   <Route path="/anotha" component={AndAnotherOne}/>
   <Route path="/andanotha" component={AnothaPage}/>
 </Router>

 </div> 
  );
  };

export default App;
