import axios from 'axios';

import * as actionTypes from './actionTypes';

// Action creators
export const getAllJobsAction = (data) => {
    return {
        type: actionTypes.GET_ALL_JOBS,
        jobList: data
    }
}

export const getAllJobTitlesAction = () => {
    return {
        type: actionTypes.GET_ALL_JOB_TITLES
    }
}

export const getAllJobsRelatedJobsAction = () => {
    return {
        type: actionTypes.GET_ALL_JOBS_RELATED_JOBS
    }
}

export const getAllJobsRelatedSkillsAction = () => {
    return {
        type: actionTypes.GET_ALL_JOBS_RELATED_SKILLS
    }
}

export const getAllJobsKeywordsAction = () => {
    return {
        type: actionTypes.GET_ALL_JOBS_KEYWORDS
    }
}

export const getAllSkillsAction = (data) => {
    return {
        type: actionTypes.GET_ALL_SKILLS,
        url: 'http://api.dataatwork.org/v1/skills',
        skillList: data
    }
}

export const getAllSkillTitlesAction = () => {
    return {
        type: actionTypes.GET_ALL_SKILL_TITLES
    }
}

export const getAllSkillsRelatedJobsAction = () => {
    return {
        type: actionTypes.GET_ALL_SKILLS_RELATED_JOBS
    }
}

export const getAllSkillsRelatedSkillsAction = () => {
    return {
        type: actionTypes.GET_ALL_SKILLS_RELATED_SKILLS
    }
}

export const getAllSkillsKeywordsAction = () => {
    return {
        type: actionTypes.GET_ALL_SKILLS_KEYWORDS
    }
}

// API calls
export const getAllJobs = (searchType) => {
    return (dispatch) => {
        const url = 'http://api.dataatwork.org/v1/' + searchType;
        axios.get(url)
            .then(response => {
                const apiData = response.data;
                console.log('Response: ', response.data);
                dispatch(getAllJobsAction(apiData));
            })
    }
}