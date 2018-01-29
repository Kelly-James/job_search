import React from 'react';

import classes from './SideNav.css';

const sideNav = (props) => {
    return (
        <div className={classes.SideNav}>
            <h1 className={classes.searchTitle}>Welcome to Job Search<sup className={classes.registered}>&reg;</sup></h1>
            <p>WHAT ARE YOU LOOKING FOR?</p>
            <select id="searchSelect1" className={classes.searchSelect} onChange={props.searchConfig}>
                <option value=""></option>
                <option value="jobs">Jobs</option>
                <option value="skills">Skills</option>
            </select>
            <button onClick={props.click}>SEARCH</button>
            <hr />
        </div>
    )
}

export default sideNav;