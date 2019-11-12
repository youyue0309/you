import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Student from './pages/student/Student';
import logo from './logo.svg';
import './App.css';
// import Button from 'antd/es/button';
import { Button } from 'antd';
import { Menu, Icon } from 'antd';
import CommonHeader from './components/commonHeader'
import Nav from './components/Nav'
const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-left">
          <Nav></Nav>
        </div>
        <div className="app-right">
          <CommonHeader></CommonHeader>
          <Route path='/home' component={Home}></Route>
          <Route path='/student' component={Student}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
