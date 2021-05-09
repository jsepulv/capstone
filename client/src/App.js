import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.scss';

import {AuthProvider} from './context/auth'
import AuthRoute from './util/AuthRoute'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Container>
          <NavBar/>
          <Route path='/' exact component={Home}/>
          <AuthRoute path='/login' exact component={Login}/>
          <AuthRoute path='/register' exact component={Register}/>
        </Container>
      </Router> 
      </AuthProvider>
    </div>
  );
}

export default App;
