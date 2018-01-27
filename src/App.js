import React, { Component } from 'react';
import './App.css';
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

    const style = {
      width: '60%',
      margin: '16px auto',
      border: '1px solid #eee',
      boxShadow: '#ccc',
      padding: '16px',
      textAlign: 'center',
      display: 'block',
      color: 'black'
    }

    let jobs = null;

    if(this.state.jobs) {
      jobs = (
        <div>
          {this.state.jobs.map((job, index) => {
            return <JobTile
              title={job.title}
              uuid={job.uuid}
              key={job.uuid}
              style={style} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <TopNav
            click={this.fetchData} />
        </header>
        <p className="App-intro">
          Job Search
        </p>
        {jobs}
      </div>
    );
  }
}


export default App;
