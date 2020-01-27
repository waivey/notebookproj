import React, { useState, useEffect} from 'react';
import { Storage } from 'aws-amplify'
import { navigate } from '@reach/router';
import { Card, ThumbnailFrame, Thumbnail } from '../style';

const ProjectCard = ({ project }) => {
    
    const { title, image, id } = project

    const [imageFile, updateImage] = useState('')

    const handleClick = (id) => {
        navigate(`projects/${id}`)
    }

    useEffect(() => {
        const fetchImage = async (key) => {
            try {
                await Storage.get(key).then(imageData => {
                    return updateImage(imageData)
                })
            } catch (err) {
                console.log('error from API call: ', err)
            }
        }

        fetchImage(image.key)
    }, [image.key])


    return(
        <Card onClick={() => handleClick(id)}>
        <h2>{title}</h2>
            {image.key && <ThumbnailFrame><Thumbnail src={imageFile} alt={title}/></ThumbnailFrame>}
        </Card>
    )
}

export default ProjectCard