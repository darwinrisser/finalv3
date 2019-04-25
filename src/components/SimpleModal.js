import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import './SimpleModal.css';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const name = this.props.name;
    const instrument = this.props.instrument;
    const location = this.props.location;
    const image = this.props.image;
    return (
      <div>
        <Button variant="outlined" onClick={this.handleOpen}>View</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <img src={image} alt="{name}" className="prof"/>
            <Typography variant="h6" id="modal-title">
              {name}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {instrument}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {location}
            </Typography>
            <Typography variant="subtitle2" id="simple-modal-description">
            Endoresments:
            </Typography>
            <Typography variant="subtitle2" id="simple-modal-description">
            Leslie is a fantastic clarinet player and teacher, our clarinet students have shown immediate improvement after working with her.
            </Typography>
            <Typography variant="subtitle2" id="simple-modal-description">
            - Joe David (Band Director)
            </Typography>
            <Button variant="contained" color="primary">Contact</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;