import React from 'react';

import classes from './Job.css'

const job = (props) => {
    
    return (
        <div className={classes.Job}>
            {/* Job title will be a button which presents related skills */}
            <p>Job Title: {props.title}</p>
            <p>UUID: {props.uuid}</p>
            <button onClick={props.click}>Show Details</button>
        </div>
    )
    
}

export default job;