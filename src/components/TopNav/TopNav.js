import React from 'react';

import classes from './TopNav.css';

const topNav = ( props ) => {
    return (
        <div className={ classes.TopNav }>
            <h1 className={ classes.searchTitle }>Welcome to Job Search<sup className={ classes.registered }>&reg;</sup></h1>
            <p>Please show me</p>
            <select id="searchSelect" className={ classes.searchSelect } onChange={ props.searchConfig }>
                <option value=""></option>
                <option value="jobs">Jobs</option>
                <option value="skills">Skills</option>
            </select>
            <button onClick={ props.click }>SEARCH</button>
        </div>
    )
}

export default topNav;