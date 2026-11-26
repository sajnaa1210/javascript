import React from 'react'
import Mobile from './Mobile'

function Electronics(data){
    console.log(data);
    return(
        <div>
            <h2>Welcome to Electronics page</h2>
            <Mobile mobile={data.mobile}/>
        </div>
    )
}

export default Electronics