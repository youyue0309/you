import React, { Component } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Aa from '../components/Aa';
import Bb from '../components/Bb';
import Cc from '../components/Cc';
import Jumpa from '../components/Jumpa'

class Jump extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Jumpa to='/aa'>a</Jumpa>
                    <hr></hr>
                    <Jumpa to='/aa'>a</Jumpa>
                    <hr></hr>
                    <Jumpa to='/aa'>a</Jumpa>
                </Router>
            </div>
        );
    }
}

export default Jump;