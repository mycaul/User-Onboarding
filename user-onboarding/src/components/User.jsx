import React from 'react'

function User({details}){
    if(!details){
        return <h3>Fetching your member details...</h3>
    }

    return (
        <div>
            <h2> {details.first_name} {details.last_name}</h2>
            <h2>{details.firstName} {details.lastName}</h2>
            <p> Email: {details.email} </p>
        </div>
    )
}

export default User