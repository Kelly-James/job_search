import React, { Component } from 'react';
import SideNav from '../components/SideNav/SideNav';
import Dashboard from '../components/Dashboard/Dashboard';

import classes from './App.css';

import axios from 'axios';

class App extends Component {

  state = {
    jobs: [],
    tileOpen: false,
    relatedJobs: [],
    relatedSkills: [],
    searchTypeState: null,
    skills: []
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
            console.log('You are awesome!');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // getDataOnChangeHandler = (searchTypeState, ) => {
  //   const url = 'http://api.dataatwork.org/v1/'
  // }

  searchTypeHandler = (event) => {
    const searchTypeUser = event.target.value;
    console.log('Search Type: ', searchTypeUser);
    this.setState({
      searchTypeState: searchTypeUser
    });
  }

  // searchInputHandler = (event) => {
  //   const searchInputUser = event.target.value;
  //   console.log('Search Input: ', searchInputUser);
  //   this.setState({
  //     searchInputState: searchInputUser
  //   });
  // }
  
  // TODO: Will return related jobs/skills based on uuid
  // showRelatedHandler = (uuid) => {
  //   const url = 'http://api.dataatwork.org/v1/jobs' + uuid + '/related_skills';
  //   axios.get(url)
  //     .then(response => {
  //       console.log(response.data);
  //         this.setState({
  //           relatedSkills: response.data.slice(0, -1),
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // TODO: Will open/close job details
  // toggleDetailsHandler() {
  //   const showDetails = this.state.tileOpen;
  //   this.setState({
  //     tileOpen: !showDetails
  //   });
  // }

  // TODO: Make this do something
  componentDidMount() {
    // this.getDataHandler();
  }

  render() {

    return (
      <div className={classes.App}>
        <SideNav
          // changed={this.searchInputHandler}
          click={this.getDataHandler}
          searchType={this.searchTypeHandler} />
        <Dashboard
          jobList={this.state.jobs}
          relatedSkills={this.state.relatedSkills}
          skillList={this.state.skills} />
      </div>
    );
  }
}

export default App;