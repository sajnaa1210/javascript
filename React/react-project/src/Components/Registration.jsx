
import React, { useState } from 'react'

function Registration() {
  

    const [formdata, setformdata] = useState({
        username: '',
        email: '',
        number: '',
    })

    const [data, setdata] = useState([]);

    const [editindex, seteditindex] = useState(null);

    const [message, setmessage] = useState('');
    const [messagetype, setmessagetype] = useState('');

    function handlechange(e) {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    function handlesubmit(e) {
        e.preventDefault();

        if (editindex === null) {
            setdata([...data, formdata]);

            setmessage("Form Submitted Successfully!");
            setmessagetype("blue");
        }
        else {
            const updateddata = [...data];
            updateddata[editindex] = formdata;
            setdata(updateddata);
            seteditindex(null);

            setmessage("Data Updated Successfully!");
            setmessagetype("green");
        }

        setformdata({
            username: '',
            email: '',
            number: ''
        });
    }

    function handleedit(index) {
        setformdata(data[index]);
        seteditindex(index);
    }

    function handledelete(index) {
        const updateddata = data.filter((item, i) => i !== index);
        setdata(updateddata);

        setmessage("Row Deleted Successfully!");
        setmessagetype("red");
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                Registration Form
            </h2>

            {message && (
                <p className={`text-center p-3 m-3 rounded font-bold
                    ${messagetype === 'green' ? 'bg-green-100 text-green-700' : ''}
                    ${messagetype === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                    ${messagetype === 'red' ? 'bg-red-100 text-red-700' : ''}
                `}>
                    {message}
                </p>
            )}

            <form onSubmit={handlesubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">

                <input
                    type="text"
                    name='username'
                    value={formdata.username}
                    onChange={handlechange}
                    placeholder='Enter username'
                    className="w-full border border-gray-300 p-3 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <input
                    type="email"
                    name='email'
                    value={formdata.email}
                    onChange={handlechange}
                    placeholder='Enter Email'
                    className="w-full border border-gray-300 p-3 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <input
                    type="number"
                    name='number'
                    value={formdata.number}
                    onChange={handlechange}
                    placeholder='Enter your number'
                    className="w-full border border-gray-300 p-3 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <button type='submit'
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
                    {editindex === null ? 'Submit' : 'Update'}
                </button>

            </form>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold text-center mb-4">
                Registration Details
            </h2>

            <table className="bg-white w-full border-collapse shadow-md">

                <thead>
                    <tr className="bg-blue-600 text-white">
                        <th className="border p-3">Username</th>
                        <th className="border p-3">Email</th>
                        <th className="border p-3">Phone Number</th>
                        <th className="border p-3">Edit</th>
                        <th className="border p-3">Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="text-center hover:bg-gray-100">

                            <td className="border p-3">{item.username}</td>
                            <td className="border p-3">{item.email}</td>
                            <td className="border p-3">{item.number}</td>

                            <td className="border p-3">
                                <button
                                    onClick={() => handleedit(index)}
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                    Edit
                                </button>
                            </td>

                            <td className="border p-3">
                                <button
                                    onClick={() => handledelete(index)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                    Delete
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}

export default Registration
