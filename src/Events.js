import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '@material-ui/core/Input';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from 'antd';



const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
      dense: {
        marginTop: 16,
      },
      menu: {
        width: 200,
      },
      margin: {
                margin: theme.spacing.unit,
      },
      bootstrapRoot: {
        'label + &': {
          marginTop: theme.spacing.unit * 3,
        },
      },
      bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
          borderColor: '#80bdff',
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
      },
      bootstrapFormLabel: {
        fontSize: 18,
      },     
  });

  export default class Events extends Component{
    state = {
        ug:0,
        dept:0,
        course:0,
        labelWidth: 0,
        date : '',
        eventName: '',
        eventType:'',
        description:'',
      };
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
      handleChange2 = eventName =>event => {
        this.setState({ [eventName]: event.target.value, });
      };
      handleChange3 = eventType =>event => {
        this.setState({ [eventType]: event.target.value, });
      };
      handleChange4 =  description=>event => {
        this.setState({ [description]: event.target.value, });
      };
      handleChange3 = date=>event => {
        this.setState({ [date]: event.target.value, });
      };

      
      render(){
          return(
            <div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br>
            <form className={styles.root} autoComplete="off">
            <FormControl className={styles.formControl}>
              <InputLabel htmlFor="ug-helper"><font size="5">Student Degree</font></InputLabel>
              <Select
                value={this.state.ug}
                onChange={this.handleChange}
                input={<Input name="ug" id="ug-helper" />
                }
                style={{width:'240px'}}
              >
                <MenuItem value={7}>All</MenuItem>
                <MenuItem value={1}>UG-1</MenuItem>
                <MenuItem value={2}>UG-2</MenuItem>
                <MenuItem value={3}>UG-3</MenuItem>
                <MenuItem value={4}>UG-4</MenuItem>
                <MenuItem value={5}>MS</MenuItem>
                <MenuItem value={6}>PhD</MenuItem>
              </Select>
              
              <FormHelperText>Please select student degree</FormHelperText>
            </FormControl>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormControl className={styles.formControl}>
              <InputLabel htmlFor="dept-helper"><font size="5">Department</font></InputLabel>
              <Select
                value={this.state.dept}
                onChange={this.handleChange}
                input={<Input name="dept" id="dept-helper" />}
                style={{width:'240px'}}
              >
                <MenuItem value={30}>All</MenuItem>
                <MenuItem value={10}>CSE</MenuItem>
                <MenuItem value={20}>ECE</MenuItem>
              </Select>
              
              <FormHelperText>Please Select Department</FormHelperText>
            </FormControl>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormControl className={styles.formControl}>
              <InputLabel htmlFor="course-helper"><font size="5">Course</font></InputLabel>
              <Select
                value={this.state.course    }
                onChange={this.handleChange}
                input={<Input name="course" id="course-helper" />}
                style={{width:'240px'}}
              >
                <MenuItem value={10}>All</MenuItem>
                <MenuItem value={20}>ASE</MenuItem>
              </Select>
              <FormHelperText>Please select course</FormHelperText>
            </FormControl>
            <br></br><br></br><br></br><br></br><br></br><br></br>

        <TextField
          id="eventName"
          label="Event Name"
          className={styles.textField}
          value={this.state.eventName}
          onChange={this.handleChange2('eventName')}
          margin="normal"
          variant="outlined"
          style={{backgroundColor:'white',width:'700px'}}
        />

          <br></br><br></br>

                <TextField
                id="eventType"
                label="Event Type"
                className={styles.textField}
                value={this.state.eventType}
                onChange={this.handleChange3('eventType')}
                margin="normal"
                variant="outlined"
                style={{backgroundColor:'white',width:'700px'}}
                />

              <br></br><br></br>

                <TextField
                id="description"
                label="Description"
                className={styles.textField}
                value={this.state.description}
                onChange={this.handleChange4('description')}
                margin="normal"
                variant="outlined"
                style={{backgroundColor:'white',width:'700px'}}
                multiline
                />
            
          </form>
            </div>
            
          );
      }

  }