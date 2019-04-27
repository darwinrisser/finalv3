import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import './MenuAppBar.css'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

 

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow} id="nav">
                <Link to="/">
                  <i class="fas fa-music"></i>  teacherr
                </Link>
              </Typography>
            {auth && (
                <div className={classes.button} id="nav">
                    <Link to="/dashboard">
                      <Button variant="outlined" className={classes.button} style={{color: 'black'}}>
                        DASHBOARD
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button variant="contained" color="secondary" className={classes.button}>
                        Sign Up
                      </Button>
                    </Link>
                    <Link to="/signin">
                      <Button variant="outlined" color="primary" className={classes.button}>
                        Sign In
                      </Button>
                    </Link>
                </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);