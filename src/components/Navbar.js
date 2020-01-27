import React from 'react';
import { Auth } from 'aws-amplify';
import { navigate } from '@reach/router'
import { userContext } from './UserContext';

import { Nav, Button } from '../style'



const Navbar = () => {
    
    const handleClick = () => {
        navigate('/updateprojects')
    }

    const handleHome = () => {
        navigate('/')
    }

    return(
        <Nav>
            <userContext.Consumer>
                {value => <h3>Hi {value}!</h3>}
            </userContext.Consumer>
            <Button onClick={handleHome}>Home</Button>
            <Button onClick={handleClick}>Add Projects</Button>
            <Button onClick={() => Auth.signOut()}>Sign Out</Button>
        </Nav>
    )
}

export default Navbar;