import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
class Header extends Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                首页
                {this.props.title}
                <button onClick={()=>{
                    this.props.history.go(-1);
                }}>&lt;</button>
            </div>
        );
    }
}

export default withRouter(Header);