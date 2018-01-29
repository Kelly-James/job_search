import React from 'react';

import classes from './Job.css'

const job = (props) => {
    
    return (
        <div className={classes.Job}>
            <p>Job Title: {props.title}</p>
            <p>UUID: {props.uuid}</p>
        </div>
    )
}

export default job;