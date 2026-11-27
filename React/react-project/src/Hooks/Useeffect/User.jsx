
import React, { useEffect, useState } from 'react';

function User() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setdata(data));
    }, []);

    return (
        <>
        <h2>Display User</h2>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Website</th>
            </tr>
            </thead>

        <tbody>
    {
      data.map((users) => {
        return (
            <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.website}</td>
            </tr>
                );
                })
                }
        </tbody>
        </table>

           
    </>
 );
}

export default User;
