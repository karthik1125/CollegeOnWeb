import React, { Component } from 'react';
import {  Button,Input,Icon } from 'antd';

import logo from './assets/logo.png';
import './App.css';

class FeeSchedules extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <div className="App">
          <center>
          <Icon type="credit-card" theme="outlined" style={{color:"white",width:"5em",height:"5em"} }/>&nbsp;&nbsp;&nbsp;Fee Schedule 
          <br></br><br></br><br></br>
          <Input placeholder="Title" />
          <br></br>
          </center>
         
        </div>
      );
    }
  }
  
  export default FeeSchedules;
  