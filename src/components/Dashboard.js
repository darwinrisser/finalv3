import React, { Component } from 'react';
import MediaCard from './MediaCard';
import './Dashboard.css';

class Dashboard extends Component {
  state = {
    users: [],
    search: ""
  }

  componentDidMount(){
    fetch('http://teacherfinder-server.herokuapp.com/api/users')
    .then(response => response.json())
    .then(json => this.setState({users:json}))
  }
  
  onchange = e => {
    this.setState({ search : e.target.value });
  }

  render() {
    const {search} = this.state;
    const filteredUsers = this.state.users.filter(user=>{
      return user.instrument.toLowerCase().indexOf( search.toLowerCase() ) !== -1
    })
    const cards = filteredUsers.map((u,i)=>{
      return <MediaCard key={i} user={u} />
    });

     return (
      <div className="dashboard">
        <input type="text" label="narrow down your search" onChange={this.onchange} className="search"/>
        <main className="main">
          {cards}
        </main>
      </div>
    );
  }
}

export default Dashboard;