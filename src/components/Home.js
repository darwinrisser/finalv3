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
      <div className="top">
        <h1 className="big">FIND A NEW TEACHER</h1>
        <p className="sub">teacherr is the easiest way to connect with private instructors in your area</p>
        <span className="buttonSpan">
            <Link to="/signup">
              <Button variant="contained" color="secondary" id="bigger-button" className={classes.button}>
                REGISTER
              </Button>
            </Link>
        </span>  
      </div>  
      {/* <div className="mid">

      </div> */}
      <footer>
        Darwin Risser 2019
      </footer>  
    </div>
  )
}

export default withStyles(styles)(Home);