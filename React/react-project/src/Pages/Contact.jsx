
import React, { useState } from 'react'
import { z } from 'zod'

function Contact() {

    const schema = z.object({
    Id: z.string().min(3, "The Id must be at least 3 characters"),

    Name: z.string()
        .regex(/^[a-zA-Z]+$/, "Name must be letters")
        .min(3, "Name must be at least 3 characters"),

    Email: z.string().regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter a valid email"
    ),

    Phone: z.string().regex(
        /^[6-9]\d{9}$/,
        "Enter a valid 10 digit phone number"
    )
})

    const [formdata, setformdata] = useState({
        Id: '',
        Name: '',
        Email: '',
        Phone: ''
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

        const result = schema.safeParse(formdata);

        if (!result.success) {
            alert(result.error.issues[0].message);
            return;
        }

        setdata([...data, formdata]);

        setformdata({
            Id: '',
            Name: '',
            Email: '',
            Phone: ''
        })
    }

    console.log(data);

   
return (
    <div className="min-h-screen bg-gray-100 p-8">

        <h2 className="text-2xl font-bold text-center text-cyan-700 mb-4">
            Welcome to Contact Page
        </h2>

        <hr className="mb-6 border-black-300" />

        <form
            onSubmit={handlesubmit}
            className="max-w-md mx-auto bg-purple-100 p-6 rounded-lg shadow-md"
        >

            <input
                type="text"
                name="Id"
                value={formdata.Id}
                onChange={handlechange}
                placeholder="Enter your Id"
                className="w-full p-3 mb-4 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="text"
                name="Name"
                value={formdata.Name}
                onChange={handlechange}
                placeholder="Enter your Name"
                className="w-full p-3 mb-4 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="email"
                name="Email"
                value={formdata.Email}
                onChange={handlechange}
                placeholder="Enter your Email"
                className="w-full p-3 mb-4 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="text"
                name="Phone"
                value={formdata.Phone}
                onChange={handlechange}
                placeholder="Enter your Phone Number"
                className="w-full p-3 mb-4 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="submit"
                className="w-full bg-amber-400 text-black p-3 rounded-md hover:bg-amber font-bold"
            >
                Submit
            </button>

        </form>

        <hr className="my-8 border-black-300" />

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">
            Contact Details
        </h2>

        <div className="overflow-x-auto max-w-4xl mx-auto">

            <table className="w-full bg-white border border-black-300 shadow-md rounded-lg overflow-hidden">

                <thead className="bg-red-400 text-white">
                    <tr>
                        <th className="p-3 border">Id</th>
                        <th className="p-3 border">Name</th>
                        <th className="p-3 border">Email</th>
                        <th className="p-3 border">Phone</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="text-center hover:bg-black-100">
                            <td className="p-3 border">{item.Id}</td>
                            <td className="p-3 border">{item.Name}</td>
                            <td className="p-3 border">{item.Email}</td>
                            <td className="p-3 border">{item.Phone}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

        <br />
        <hr className="border-gray-300" />

    </div>
)

}

export default Contact
