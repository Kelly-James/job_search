import * as actionTypes from '../actions/actionTypes';

const initialState = {
    jobs: [],
    relatedJobs: [],
    relatedSkills: [],
    skills: []    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_JOBS:
        return {
            ...state,
            jobs: action.jobList.slice(0, -1)
        };
        case actionTypes.GET_ALL_SKILLS:
        return {
            skills: action.skillList.slice(0, 1)
        };
        default:
        console.log('Woo.');
        console.log('[Reducer] State: ', state.jobs);
    }
    return state;
}

export default reducer;

