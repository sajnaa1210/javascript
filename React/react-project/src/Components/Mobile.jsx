import React from 'react'

function Mobile(data){
    console.log(data)
    return(
        <div>
            <h2>Welcome to Mobile Page</h2>
           <p> Mobile: {data.mobile}</p>
        </div>
    )
}

export default Mobile