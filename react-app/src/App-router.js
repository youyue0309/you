import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import A from "./components/A";
import B from './components/B';
import Home from './components/Home';
import Jump from './components/Jump';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Header title="wyb"></Header>
        <Link to="/a/5">A</Link>
        <Link to="/b">B</Link>
        <Link to="/">首页</Link>
        <Link to='/jump'>跳转</Link>
        <Route path="/a/:id" component={A}></Route>
        <Route path='/b' component={B}></Route>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/jump' component={Jump}></Route>
        {/* <Switch>
          <Route path="/a" component={A}></Route>
          <Route path='/b' component={B}></Route>
          <Route path='/' component={Home}></Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
