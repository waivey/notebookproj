import { FETCH_PROJECTS_PENDING, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_ERROR } from '../actions'

const initialState = {
    pending: false,
    projects: [],
    error: null
}

export const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROJECTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                pending: false,
                projects: action.projects
            }
        case FETCH_PROJECTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state
    }
}


// Selectors to get defined parts of state -> maybe not need right now, but good for bigger apps
export const getProjects = state => state.projects;
export const getProjectById = (state, id) => {return state.projects.filter(project => project.id === id)}
export const getProjectsPending = state => state.pending;
export const getProjectsError = state => state.error


export default projectReducer