import React from 'react';

import classes from './SideNav.css';

const sideNav = (props) => {
    return (
        <div className={classes.SideNav}>
            <h1 className={classes.searchTitle}>Welcome to Job Search<sup className={classes.registered}>&reg;</sup></h1>
            <hr />
            <p>BROWSE ALL</p>
            <select id="searchSelect" className={classes.searchSelect} onChange={props.searchConfig}>
                <option value=""></option>
                <option value="jobs">Jobs</option>
                <option value="skills">Skills</option>
            </select>
            <button className={classes.searchBtn}onClick={props.click}>SEARCH</button>
        </div>
    )
}

export default sideNav;