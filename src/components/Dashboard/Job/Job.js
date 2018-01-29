import React from 'react';

import classes from './Job.css'

const job = (props) => {
    
    return (
        <div className={classes.Job}>
            <h3>Job Title: {props.title}</h3>
        </div>
    )
}

export default job;