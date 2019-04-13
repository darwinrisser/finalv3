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
        <h1>Welcome to Teacher Finder!</h1>
        <h4>Teacher Finder is the easiest, fastest way to find a new private lesson instructor for your music program.</h4>
        <h5>Create a free account today and find your new Clarinet/Trumpet/Voice/etc. teacher today!</h5>
        <p>If you are a private instructor, create a free profile to make yourself visible to directors in search of new teachers.</p>
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