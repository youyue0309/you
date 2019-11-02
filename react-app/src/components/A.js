import React, { Component } from 'react';

class A extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                AAA{this.props.match.params.id}
            </div>
        );
    }
}

export default A;