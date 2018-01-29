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
  
  searchTypeHandler = (event) => {
    const searchTypeUser = event.target.value;
    console.log('Search Type: ', searchTypeUser);
    this.setState({
      searchTypeState: searchTypeUser
    });
  }

  render() {
    return (
      <div className={classes.App}>
        <SideNav
          click={this.getDataHandler}
          searchType={this.searchTypeHandler} />
        <Dashboard
          jobList={this.state.jobs}
          relatedSkills={this.state.relatedSkills}
          relatedSkillsToggle={this.showRelatedSkillsHandler}
          skillList={this.state.skills} />
      </div>
    );
  }
}

export default App;