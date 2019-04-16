import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleModal from './SimpleModal';
import './MediaCard.css';

const styles = {
  card: {
    minWidth: 245,
    marginTop: 35,
    margin: 20,
  },
  media: {
    minHeight: 200,
  },
};

class MediaCard extends React.Component {
  render(){
    const { classes } = this.props;
  return (
    <Card className={classes.card} id="cardPic">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          id="cardPic"
          image={this.props.user.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.user.name}
          </Typography>
          <Typography component="p">
            {this.props.user.instrument}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <SimpleModal 
            name={this.props.user.name}
            instrument={this.props.user.instrument}
            image={this.props.user.image}
            location={this.props.user.location}
            />   
        </Button> 
      </CardActions>
    </Card>
  );
}
  }

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);