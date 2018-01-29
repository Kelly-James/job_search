import React from 'react';

import classes from './Skill.css'

const skill = (props) => {

    return (
        <div className={classes.Skill}>
            <p>Skill Description: {props.name}</p>
            <p>UUID: {props.uuid}</p>
        </div>
    )
}

export default skill;