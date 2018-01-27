import React from 'react';
import classes from './TopNav.css';

const topNav = (props) => {
    return (
        <div className={classes.topNavContainer}>
            <h1 className={classes.searchTitle}>I would like to search for</h1>
            <button onClick={props.click}>SUBMIT</button>
        </div>
    )
}

export default topNav;