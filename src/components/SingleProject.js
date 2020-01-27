import React, { useEffect, useState } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { getProject } from '../graphql/queries';
import { navigate } from '@reach/router'
import { HeadTitle, Image, Button, Tile, Description, Section } from '../style'



const SingleProject = (props) => {
    
    const id = props.project_id

    const [project, updateProject] = useState({})
    const [imageFile, updateImage] = useState('')
    const { title, image, description } = project
 
        
    useEffect(() => {
        const fetchProject = async () => {
            try {
                let project = await API.graphql(graphqlOperation(getProject, {id}))
                project = project.data.getProject
                updateProject(project)
                await Storage.get(project.image.key).then(imageData => updateImage(imageData))
            } catch (err) {
                console.log('error in SingleProject: ', err)
            } 
        }

        fetchProject()
    }, [id])

    const handleClick = () => {
        navigate(`/updateprojects/${id}`, {project: project})
    }

    console.log(id)

    return(
        <>
            <HeadTitle>{title}</HeadTitle>
            <Tile>
                <Section>
                    {image && <Image primary src={imageFile} alt={title}/>}
                    <Description>{description}</Description>
                </Section>
                <Button primary onClick={handleClick}>Edit Project</Button> 
            </Tile>
        </>
    )
}




export default SingleProject