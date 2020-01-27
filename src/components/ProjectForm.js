import React, { useState } from 'react';
import awsconfig from '../aws-exports'
import uuid from 'uuid/v4'
import { userContext } from './UserContext'
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { createProject, updateProject } from '../graphql/mutations'
import { navigate } from '@reach/router'
import { getProjectById } from '../reducers'
import { connect } from 'react-redux'
import { S3Image } from 'aws-amplify-react';
import { Button, Form, Section, InputTag } from '../style'

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = awsconfig


const ProjectForm = ({ project }) => {

    const hasProject = project.length === 1
    const projToUpdate = hasProject && project[0]

    const [title, updateTitle] = useState('' || projToUpdate.title )
    const [file, updateFile] = useState('')
    // const [yarn, updateYarn] = useState('')
    // const [craft, updateCraft] = useState('')
    // const [amount, updateAmount] = useState(0)
    const [description, updateDescription] = useState('' || projToUpdate.description)

    const handleFileChange = event => {
        const { target: {value, files } } = event;
        const [image] = files || [];
        updateFile(image || value)
    }
    
    const handleSubmit = async (event, username) => {
        event.preventDefault()

        
        const { name: fileName, type: mimeType } = file
        const key = `${uuid()}${fileName}`
            
        const fileForUpload = {
            bucket,
            region,
            key
        }
            
        const inputData = { username, image: fileForUpload, description, title}
            
        try {
            if (file) {
                await Storage.put(key, file, {
                        contentType: mimeType
                    })
            }
            if (hasProject) {
                const updatedData = projToUpdate.image.key ? {id: projToUpdate.id, title, description} : {id: projToUpdate.id, ...inputData}
                await API.graphql(graphqlOperation(updateProject, {input: updatedData}))
                navigate(`/projects/${projToUpdate.id}`)
            } else {
                await API.graphql(graphqlOperation(createProject, { input: inputData}))
                navigate('/')
            }
            } catch (err) {
                console.log('error: ', err)
            }
        
    }


    return(
        <Form>
            <Section primary>
                <InputTag>Title: <input type='text' placeholder='Project Title' value={title || ''} required onChange={event => updateTitle(event.target.value)}/></InputTag>
                <InputTag>Image: <input type='file' onChange={handleFileChange} /></InputTag>
           {/* <select onChange={event => updateCraft(event.target.value)}>
               <option value='' defaultValue hidden>Craft</option>
               <option value='knitting'>Knitting</option>
               <option value='crochet'>Crochet</option>
           </select>
           <select onChange={event => updateYarn(event.target.value)}>
               <option value='' defaultValue hidden>Yarn</option>
               <option value='4-Ply'>4-Ply</option>
               <option value='DK'>DK</option>
               <option value='Aran'>Aran</option>
               <option value='Chunky'>Chunky</option>
           </select>
           <div>Amount used: <input type='number' value={amount} onChange={event => updateAmount(event.target.value)}/>meters</div> */}
                <InputTag>Description: <textarea placeholder='Project Description' value={description || ''} onChange={event => updateDescription(event.target.value)}/></InputTag>
            </Section>
            <Section>
                <h4>Stored Image: </h4>
                {(hasProject && projToUpdate.image.key) ? <S3Image imgKey={projToUpdate.image.key}/> : <em>No image uploaded</em>}
            </Section>
            
           
        <userContext.Consumer>
            {value => 
            <Button primary onClick={event => handleSubmit(event, value)}>{projToUpdate ? 'Update Project' : 'Add Project'}</Button>}
        </userContext.Consumer>
        
       </Form>
    )
}


const mapStateToProps = (state, ownProps) => ({
    project: getProjectById(state, ownProps['*'])
})


export default connect(mapStateToProps)(ProjectForm);