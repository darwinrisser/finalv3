import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import MenuAppBar from './components/MenuAppBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignUpCOPY from './components/SignUpCOPY';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={'/teacherr'}>
          <MenuAppBar/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUpCOPY}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Router>
      </div>
    );
  }
}

export default App;
