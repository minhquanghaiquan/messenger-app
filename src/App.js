import React from 'react';
import {BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './containers/HomePage'
import LoginPage from './containers/LoginPage'
import RegisterPage from './containers/RegisterPage'
import './App.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
          {/* only logged in user can access this home route */}
          <PrivateRoute path="/" exact component={HomePage} />


          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={RegisterPage} />
      </Router>
  </div>
  );
}

export default App;
