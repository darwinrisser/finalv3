import React from 'react';
import './UserCard.css';

function UserCard(props) {
    return(
        <div className="card">
            <h1>{props.user.name}</h1>
            <img src={props.user.image} alt={props.user.name}/>
            <p>{props.user.instrument}</p>
            <p>{props.user.location}</p>
            <a href="mailto: {props.user.email}" className="navLink"><button id="messageBtn"><i class="far fa-envelope"></i> Message</button></a>
        </div>
        );
    }

export default UserCard;
