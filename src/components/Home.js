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
        <h1 className="big">FIND YOUR NEW TEACHER</h1>
        <p className="sub"><i class="fas fa-music"></i> teacherr is the easiest way to connect with private instructors in your area</p>
        <Link to="/signup">
          <Button variant="contained" color="secondary" id="bigger-button" className={classes.button}>
            REGISTER
          </Button>
        </Link>
        <span id="down"><a href="#middle"> 
          <i class="far fa-arrow-alt-circle-down"></i></a>
        </span>
      </div>
      <div className="mid" id="middle">
        <div className="info">
          <p>
            <i class="fas fa-search-location"></i>
          </p>
          <p>
            Looking for a new instrumental teacher? Find the best teaching talent in your area with our easy to use search feature.
          </p>
        </div>
        <div className="info">
          <img id="example" src="https://i.imgur.com/hx8VSBG.jpg" alt="example of feature"/>
        </div>
        <div className="info">
          <p>
            <i class="fas fa-id-card"></i>
          </p>  
          <p>
            Teachers are reviewed by their peers and co-workers so that you can make the right decision for your students.
          </p>
        </div>   
      </div>
      <footer>
          <p>
            <i class="fab fa-react"></i> + <i class="fab fa-node-js"></i> + <i class="fas fa-coffee"></i>
          </p>
          <p>
          github.com/darwinrisser | darwinrisser.dev | linkedin.com/in/darwinrisser
          </p>
      </footer>
    </div>
  )
}

export default withStyles(styles)(Home);