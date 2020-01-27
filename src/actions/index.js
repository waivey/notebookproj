import { API, graphqlOperation } from "aws-amplify"
import { listProjects } from "../graphql/queries"


// Action Types
export const FETCH_PROJECTS_PENDING = 'FETCH_PROJECTS_PENDING';

export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';

export const FETCH_PROJECTS_ERROR = 'FETCH_PROJECTS_ERROR';



// Action Creators
const fetchProjectsPending = () => {
    return {
        type: FETCH_PROJECTS_PENDING
    }
}

const fetchProjectsSuccess = projects => {
    return {
        type: FETCH_PROJECTS_SUCCESS,
        projects
    }
}

const fetchProjectsError = error => {
    return {
        type: FETCH_PROJECTS_ERROR,
        error
    }
}



// Actually Actions doing things
export const fetchProjects = () => {
    return async dispatch => {
        dispatch(fetchProjectsPending());
        try {
            let projects = await API.graphql(graphqlOperation(listProjects))
            projects = projects.data.listProjects.items
            dispatch(fetchProjectsSuccess(projects))
        } catch (err) {
            dispatch(fetchProjectsError(err))
        }

        return 'done'    
    }
}