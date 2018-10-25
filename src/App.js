import React, { Component } from 'react';
import SlideBar from './Sidebar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import logo from './assets/logo.png';
import './App.css';


const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, #f5f9d9 20%, #563947 40%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});

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

              <MuiThemeProvider theme={theme}>
                <Button onClick={() => this.handleClick()}>Login</Button>
              </MuiThemeProvider>

              {/* <Button type="primary" style={{width:160,height:60,backgroundColor:"#563947",borderRadius:10,color:"#f5f9d9"}} onClick={() => this.handleClick()} block >Login</Button> */}
            </center>
            </header>
          </div>)}
      </div>
    );
  }
}

export default App;
