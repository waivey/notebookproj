import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { fetchProjects } from '../actions'
import { connect } from 'react-redux'
import { getProjects, getProjectsPending, getProjectsError } from '../reducers';
import { HeadTitle, List } from '../style'


const ProjectList = ({ fetchProjects, projects }) => {

    useEffect(() => {
        fetchProjects()
    }, [projects.length, fetchProjects]) 

    return(
        <>
        <HeadTitle>Projects</HeadTitle>
            <List> 
                {projects && projects.map(project => <ProjectCard key={project.id} project={{...project}}/>)}
            </List>
        </>
    )
}


const mapStateToProps = state => ({
    projects: getProjects(state),
    pending: getProjectsPending(state),
    error: getProjectsError(state)
})

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: () => dispatch(fetchProjects())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);