import React from 'react';

const ErrHandler = ({msg}) => {
    const err = msg ? msg : 'Oops... Page Not Found'
    return(
        <h3>{err}</h3>
    )
}

export default ErrHandler;