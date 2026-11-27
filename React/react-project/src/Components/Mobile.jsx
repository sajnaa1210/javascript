import React, { useContext } from 'react'
import { MobileContext } from './MobileContext';

//the concept of transfering data from one file to another is called promptdrilling

{/*function Mobile(data){
    const mobile = useContext(MobileContext);
    console.log(data)
    return(
        <div>
            <h2>Welcome to Mobile Page</h2>
           <h4> Mobile: {data.mobile}</h4>
        </div>
    )
}

export default Mobile*/}

function Mobile() {
    const mobile = useContext(MobileContext);
    console.log(mobile);
  return (
    <div>
       <h2>welcome to Mobile page</h2>
       <h2>Mobile: {mobile}</h2>
        </div>
  )
}

export default Mobile