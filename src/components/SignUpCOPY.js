import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignUpCOPY extends React.Component {
  state = {
    name: "",
    email: "",
    instrument: "",
    location: ""   
  }

  handleEmail = (event) => {
    this.setState({email: event.target.value})
  }

  handleName = (event) => {
    this.setState({name: event.target.value})
  }

  handleInstrument = (event) => {
    this.setState({instrument: event.target.value})
  }

  handleLocation = (event) => {
    this.setState({location: event.target.value})
  }

  createUser = (e) => {
    e.preventDefault();
    let newUser={
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          name:this.state.name,
          instrument:this.state.instrument,
          email:this.state.email,
          location:this.state.location
      })
    }
    fetch("http://teacherfinder-server.herokuapp.com/api/users", newUser).then((res)=>{
      console.log(res.json())
    })
    alert('Account created successfully!');
  }

  render(){
    const { classes } = this.props;
    return (
      <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up for a free account
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Full Name</InputLabel>
            <Input onChange={this.handleName} id="name" name="name" autoComplete="name" autoFocus/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input onChange={this.handleEmail} id="email" name="email" autoComplete="email" autoFocus/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="instrument">Instrument(s)</InputLabel>
            <Input onChange={this.handleInstrument} name="instrument" type="instrument" id="instrument" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="location">Location ex: Austin, Leander, etc.</InputLabel>
            <Input onChange={this.handleLocation} name="location" type="location" id="location" autoComplete="location" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={this.createUser}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            SIGN UP
          </Button>
        </form>
      </Paper>
    </main>
    );
  }
}

export default withStyles(styles)(SignUpCOPY);