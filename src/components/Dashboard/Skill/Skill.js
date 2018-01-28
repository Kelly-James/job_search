import React from 'react';

import classes from './Skill.css'

const skill = (props) => {

    return (
        <div className={classes.Skill}>
            {/* Job title will be a button which presents related skills */}
            <p>Skill Description: {props.name}</p>
            <p>UUID: {props.uuid}</p>
        </div>
    )

}

export default skill;