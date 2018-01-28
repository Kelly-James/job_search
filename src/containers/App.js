import React, { Component } from 'react';
import TopNav from '../components/TopNav/TopNav';
import Dashboard from '../components/Dashboard/Dashboard';

import classes from './App.css';

import axios from 'axios';

class App extends Component {

  state = {
    jobs: [],
    tileOpen: false,
    searchConfig: null,
    skills: []
  }
  
  // Call to API, returns list of jobs/skills
  getDataHandler = (searchConfig) => {
    const url = 'http://api.dataatwork.org/v1/' + this.state.searchConfig;
    axios.get(url)
      .then(response => {
        console.log(response.data)
        switch ( this.state.searchConfig ) {
          case 'jobs':
            this.setState({
              jobs: response.data
            })
            break;
          case 'skills':
            this.setState({
              skills: response.data
            })
            break;
          default:
            console.log('You are awesome!');
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  searchConfigHandler = (event) => {
    const searchSelection = event.target.value;
    console.log('Search Configured', searchSelection);
    this.setState({
      searchConfig: searchSelection
    })
  }
  
  // TODO: Will return related jobs/skills based on uuid
  // showRelatedHandler = (uuid) => {

  // }

  // TODO: Will open/close job details
  // toggleDetailsHandler() {
  //   const showDetails = this.state.tileOpen;
  //   this.setState({
  //     tileOpen: !showDetails
  //   })
  // }

  // TODO: Make this do something
  componentDidMount() {
    // this.getDataHandler();
  }

  render() {

    return (
      <div className={classes.App}>
        <TopNav
          click={this.getDataHandler}
          searchConfig={this.searchConfigHandler} />
        <Dashboard
          // detailToggle={this.toggleDetailsHandler} 
          jobList={this.state.jobs}
          skillList={this.state.skills} />
      </div>
    );
  }
}

export default App;