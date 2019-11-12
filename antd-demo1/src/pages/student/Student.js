import React, { Component } from 'react';
import axios from 'axios';
import Mock from './../../Mock/mock';
import {Table} from 'antd';
const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '生日',
        dataIndex: 'birth',
        key: 'birth',
    },
];

class Student extends Component {
    constructor(){
        super();
        this.state={
            dataSource:[]
        }
    }
    componentWillMount() {
        axios.get('http://www.wyb.com/student').then((res) => {
            console.log(res.data);
            this.setState({
                dataSource:res.data.list
            })
            // this.dataSource = res.data.list;
        })
    }
    render() {
        return (
            <div>
                hhhh
                <Table dataSource={this.state.dataSource} columns={columns} />;
            </div>
        );
    }
}

export default Student;