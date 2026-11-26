import React from 'react'
import Electronics from './Electronics'

function Flipkart(data){
    console.log(data);
    return(
        <div>
            <h2>Welcome to Flipkart</h2>
            <Electronics mobile={data.mobile}/>

        </div>
    )
}

export default Flipkart