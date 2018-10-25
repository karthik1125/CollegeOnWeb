import React, { Component } from 'react';
import { Button,Icon } from 'antd';
import SlideBar from './Sidebar';

import logo from './assets/logo.png';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
        logged:false,
    }
  }

  handleClick = ()=> {
    this.setState({logged:true})
  }

  handleMenu = () => {
    console.log("SDJkaSJDKJSAD")
    this.setState({clicked:false,})
  }
  render() {
    return (
      <div className="App">
        {this.state.logged 
          ?(
            <div className="App">
              <SlideBar />         
            </div>
            
            ) 
          :(<div>
            <header className="App-header">
            <center>
              <div>
              <img src={logo} className="App-logo" alt="logo" />
              </div>
              <br></br>
              <Button type="primary" style={{width:160,height:60,backgroundColor:"#563947",borderRadius:10,color:"#f5f9d9"}} onClick={() => this.handleClick()} block >Login</Button>
            </center>
            </header>
          </div>)}
      </div>
    );
  }
}

export default App;
