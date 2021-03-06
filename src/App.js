import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/signup" component={RegisterPage}></Route>
      </Router>
    </div>
  );
}

export default App;
