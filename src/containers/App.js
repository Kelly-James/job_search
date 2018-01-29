import React, { Component } from 'react';
import SideNav from '../components/SideNav/SideNav';
import Dashboard from '../components/Dashboard/Dashboard';

import classes from './App.css';

import axios from 'axios';

class App extends Component {

  state = {
    jobs: [],
    skills: [],
    searchTypeState: null
  }
  
  // Call to API, returns list of jobs/skills
  getDataHandler = (searchTypeState) => {
    const url = 'http://api.dataatwork.org/v1/' + this.state.searchTypeState;
    axios.get(url)
      .then(response => {
        console.log(response.data)
        switch ( this.state.searchTypeState ) {
          case 'jobs':
            this.setState({
              jobs: response.data.slice(0, -1),
              skills: []
            });
            break;
          case 'skills':
            this.setState({
              skills: response.data.slice(0, -1),
              jobs: []
            });
            break;
          default:
            console.log(':)');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  // Determine the type of search being made
  searchConfigHandler = (event) => {
    const searchTypeUser = event.target.value;
    this.setState({
      searchTypeState: searchTypeUser
    });
  }

  render() {
    return (
      <div className={classes.App}>
        <SideNav
          click={this.getDataHandler}
          searchConfig={this.searchConfigHandler} />
        <Dashboard
          jobList={this.state.jobs}
          skillList={this.state.skills} />
      </div>
    );
  }
}

export default App;