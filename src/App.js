import React, { useState, useEffect } from 'react';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react'
import { userContext } from './components/UserContext'
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import SingleProject from './components/SingleProject';
import ErrHandler from './components/ErrHandler'
import ProjectForm from './components/ProjectForm';



Amplify.configure(awsconfig);



function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUser() {
      const info = await Auth.currentUserInfo()
      setUser(info.username)
    }
    getUser()
  }, [])


  
  return (
    <main>
    <userContext.Provider value={user}>
      <Navbar />
      <Router>
        <ProjectList path="/" />
        <SingleProject path="/projects/:project_id"/>
        <ProjectForm path="/updateprojects/*"/>
        <ErrHandler default />
      </Router>
    </userContext.Provider>
    </main>
  );
}

export default withAuthenticator(App)
