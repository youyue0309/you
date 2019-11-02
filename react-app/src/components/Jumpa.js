import React, { Component } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Jumpa extends Component {
    render() {
        return (
            <Route>
                <Link to={this.props.to}>{this.props.children}</Link>
            </Route>
        );
    }
}

export default Jumpa;