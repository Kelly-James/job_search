import React from 'react';
import classes from './JobTile.css'

const job_tile = (props) => {
    return (
        <div className="JobTile">
            {/* Job title will be a button which presents related skills */}
            <p>Job Title: {props.title}</p>
            <p>UUID: {props.uuid}</p>
        </div>
    )
}

export default job_tile;