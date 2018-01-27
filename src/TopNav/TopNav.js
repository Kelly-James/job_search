import React from 'react';
import './TopNav.css';

const topNav = (props) => {
    return (
        <div className="topNavContainer">
            <h1 className="searchTitle">I would like to search for</h1>
            <button onClick={props.click}>SUBMIT</button>
        </div>
    )
}

export default topNav;