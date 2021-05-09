import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
      </Router>
      <h1>PLACEHODER TEXT</h1>
    </div>
  );
}

export default App;
