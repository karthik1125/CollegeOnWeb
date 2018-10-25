import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const axios = require('axios');
const styles = {
  card: {
    padding:50,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class AdminHome extends Component {
  constructor(props){
    super(props);
    this.state={
      dummycount:20,
      array : []
    }
  }

  cardData = (res) =>{
    console.log(res.status,"inside function");
    if(res.status == 200){
      console.log(res.data);
      
      let array2=res.data;
      let count = Object.keys(res.data).length;
      console.log(array2);
      this.setState({array:array2})
       //console.log(length(res.data[2]["SlNo"]));
    }
    else{
      console.log(res.status);
    }
  }

   handlePress = async () => {
    let self=this;
    console.log("entered function");

    await axios.get("http://192.168.43.137:8000/api/events/").then(res => {
      self.cardData(res);
    })
    //let array2 = [{'key1':'value1','key11':'value11'},{'key1':'value2','key11':'value22'}];

    //this.setState({array:array2})
    
  }

  componentWillMount(){
    this.handlePress();
  }
    
    render() {
      let self = this;
      return (
        <div style={{paddingLeft:100,paddingRight:100,paddingTop:100,paddingBottom:30}}>
           {self.state.array.map(function(x,i){
             return (
              <div style={{paddingLeft:100,paddingRight:100,paddingTop:30,paddingBottom:20}}>
              <Card className={styles.card} key={i}>
              <CardContent>
                <Typography className={styles.title} color="textSecondary" gutterBottom>
                {self.state.array[i]["event_type"]}
                </Typography>
                <Typography variant="h5" component="h2">
                {self.state.array[i]["event_name"]}
                </Typography>
                <Typography className={styles.pos} color="textSecondary">
                {self.state.array[i]["post_time"]}
                </Typography>
                <Typography component="p">
                {self.state.array[i]["description"]}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </div>
             );
             

            })}
          
         
        </div>        
      );
    }
  }
  
  export default AdminHome;
  