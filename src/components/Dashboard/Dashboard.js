import React from 'react';
import Job from './Job/Job';
import Skill from './Skill/Skill';

import classes from './Dashboard.css';

const dashboard = ( props ) => {

    let jobs = props.jobs;
    let skills = props.skillList;

    if (jobs) {
        jobs = (
            <div>
                {jobs.map((job) => {
                    console.log('Job: ', job.title);
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
                {skills.map((skill) => {
                    return <Skill
                        name={skill.name}
                        uuid={skill.uuid}
                        key={skill.uuid} />
                })}
            </div>
        )
    }

    return (
        <div className={classes.Dashboard}>
            {jobs}
            {skills}
        </div>
    )
    
}

export default dashboard;