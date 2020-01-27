import React, { useState } from 'react';

const ProjectEditor = ({ project }) => {

    console.log('props in editor', project)
    const { title } = project

    const [newTitle, updateTitle] = useState(title)

    return(
        <form>
            Title: <input type='text' required value={newTitle} onChange={event => updateTitle(event.target.value)} />
        </form>
    )
}

export default ProjectEditor;