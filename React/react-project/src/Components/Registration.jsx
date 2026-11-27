
import React, { useState } from 'react'

function Registration() {

    const [formdata, setformdata] = useState({
        username: '',
        email: ''
    })

    const [data, setdata] = useState([]);

    function handlechange(e) {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    function handlesubmit(e) {
        e.preventDefault();

        setdata([...data, formdata]);

        setformdata({
            username: '',
            email: ''
        });

        alert("Form Submitted");
    }

    return (
        <div>
            <h2>Registration Form</h2>

            <form onSubmit={handlesubmit}>

                <input
                    type="text"
                    name='username'
                    value={formdata.username}
                    onChange={handlechange}
                    placeholder='Enter username'
                />

                <br />

                <input
                    type="text"
                    name='email'
                    value={formdata.email}
                    onChange={handlechange}
                    placeholder='Enter Email'
                />

                <br />

                <button type='submit'>Submit</button>

            </form>

            <hr/>

            <table border="1">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <hr/>

        </div>
    )
}

export default Registration
