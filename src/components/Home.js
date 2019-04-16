import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import './Home.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Home(props) {
  const { classes } = props;
  return (
    <div className="home">
      <main>
        <h1>Welcome to Teacher Finder</h1>
        <h4>the easiest, fastest way to find a new private lesson instructor for your music program.</h4>
        <p>Create a free account and find your new instrumental teacher today!</p>
        <p>If you are a private instructor, create a free profile to make yourself visible to directors in search of new teachers!</p>
        <span className="buttonSpan">
          <Link to="/signin">
            <Button variant="contained" className={classes.button}>
              Sign In
            </Button>
          </Link>
            <Link to="/signup">
              <Button variant="contained" color="secondary" className={classes.button}>
                Sign Up
              </Button>
            </Link>
        </span>  
      </main>    
    </div>
  )
}

export default withStyles(styles)(Home);