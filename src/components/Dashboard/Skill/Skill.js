import React from 'react';

import classes from './Skill.css'

const skill = (props) => {

    return (
        <div className={classes.Skill}>
            <h3>Skill Description: {props.name}</h3>
        </div>
    )
}

export default skill;