import React,{ Component } from 'react';
import logo from './assets/logo.png';
import { slide as Menu } from 'react-burger-menu';
import { Button,Icon } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FeeSchedules from './FeeScedules';
import AdminHome from './AdminHome';
import Events from './Events';

export default class SlideBar extends Component {
  constructor(props){
    super(props);
    this.state={
      menuStatus:false,
    }
  }
  render(){
    return (
      <Router>
              <div>
              <center>
              <div style={{backgroundColor:"#563947"}}>
                        
                        <img src={logo} className="App-logo2" alt="logo" />
                        
              </div>
              <Menu isOpen={ this.state.menuStatus }>
              <Link to={'/'} className="nav-link menu-item" onClick={() => this.setState({menuStatus:false})} >
              <Icon type="credit-card" theme="outlined" style={{color:"white"}}/>&nbsp;&nbsp;&nbsp;Home 
                <br></br>
                <br></br>
                </Link>
  
              <Link to={'/FeeSchedules'} className="nav-link menu-item" onClick={() => this.setState({menuStatus:false})}>
             
              <Icon type="credit-card" theme="outlined" style={{color:"white"}}/>&nbsp;&nbsp;&nbsp;Fee Schedule 
                <br></br>
                <br></br>
            </Link>
              
              <a className="menu-item" href="/laravel">
              <Icon type="sync" theme="outlined" style={{color:"white"}}/>&nbsp;&nbsp;&nbsp;Class Reschedule
                <br></br>
                <br></br>
              </a>
        
              <a className="menu-item" href="/angular">
              <Icon type="table" theme="outlined" style={{color:"white"}}/> &nbsp;&nbsp;&nbsp;Timetable<br></br><br></br>
              </a>
        
              <Link to={'/Events'} className="nav-link menu-item" onClick={() => this.setState({menuStatus:false})}>
              <Icon type="calendar" theme="outlined" style={{color:"white"}}/> &nbsp;&nbsp;&nbsp;Events<br></br><br></br>
              </Link>
              
              
              <a className="menu-item" href="/node">
              <Icon type="bar-chart" theme="outlined" style={{color:"white"}}/>&nbsp;&nbsp;&nbsp; Grades
              </a>
            </Menu>
            <Switch>
            <Route path='/FeeSchedules' component={FeeSchedules} />
            <Route path='/Events' component={Events} />
                      <Route path='/'  component={AdminHome} />
                      
            </Switch>
            </center>
            </div>
            </Router>   
      
    );
  };
  }
  