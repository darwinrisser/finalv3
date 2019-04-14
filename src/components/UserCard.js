import React from 'react';
import './UserCard.css';
import SimpleModal from './SimpleModal'
import Button from '@material-ui/core/Button';

function UserCard(props) {
    return(
        <div className="card">
            <h1>{props.user.name}</h1>
            <img src={props.user.image} alt={props.user.name}/>
            <p>{props.user.instrument}</p>
            <p>{props.user.location}</p>
            <Button variant="contained" color="primary"><SimpleModal user={props.user}/></Button>
            
        </div>
        );
    }

export default UserCard;
