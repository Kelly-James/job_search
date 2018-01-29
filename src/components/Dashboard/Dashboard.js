import React from 'react';
import Job from './Job/Job';
import Skill from './Skill/Skill';

import classes from './Dashboard.css';

const dashboard = (props) => {

    let jobs = props.jobList;
    let skills = props.skillList;

    if (jobs) {
        jobs = (
            <div>
                {props.jobList.map((job) => {
                    return <Job
                        title={job.title}
                        uuid={job.uuid}
                        key={job.uuid} />
                })}
            </div>
        );
    }
    
    if (skills) {
        skills = (
            <div>
                {props.skillList.map((skill) => {
                    return <Skill
                        name={skill.name}
                        uuid={skill.uuid}
                        key={skill.uuid} />
                })}
            </div>
        );
    }

    return (
        <div className={classes.Dashboard}>
            {jobs}
            {skills}
        </div>
    )
    
}

export default dashboard;