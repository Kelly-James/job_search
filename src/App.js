import React, { Component } from 'react';
import classes from './App.css';
import TopNav from './TopNav/TopNav';
import JobTile from './JobTile/JobTile';

import axios from 'axios';

class App extends Component {

  state = {
    jobs: []
  }
  
  fetchData = () => {
    const url = 'http://api.dataatwork.org/v1/jobs';
    axios.get(url)
      .then(response => {
        console.log(response.data)
        this.setState({
          jobs: response.data
        })
        // console.log('Jobs: ', this.state.jobs);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {

    let jobs = null;

    if(this.state.jobs) {
      jobs = (
        <div>
          {this.state.jobs.map((job, index) => {
            return <JobTile
              title={job.title}
              uuid={job.uuid}
              key={job.uuid} />
          })}
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <TopNav
            click={this.fetchData} />
        </header>
        <p className={classes.AppTitle}>
          Job Search
        </p>
        {jobs}
      </div>
    );
  }
}


export default App;
