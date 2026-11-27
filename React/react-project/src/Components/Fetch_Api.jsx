import React, { useEffect, useState } from 'react';

function Fetch_Api() {

    const [data, setdata] = useState([]);
    const [search, setsearch] = useState("");
    
        useEffect(() => {
            fetch("https://dummyjson.com/quotes")
                .then(response => response.json())
                .then(data => setdata(data.quotes));
        }, []);

        const filteredData = data.filter((item) =>
        item.author.toLowerCase().includes(search.toLowerCase()) ||
        item.quote.toLowerCase().includes(search.toLowerCase())
    );
    
  return (
    <>
    <h2>Quotes Page</h2>

    <input
                type="text"
                placeholder="Search author or quote"
                onChange={(e) => setsearch(e.target.value)}
            />
            
    <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Quote</th>
            <th>Author</th>
            </tr>
        </thead>

    <tbody>
{
    filteredData.map((quotes) => {
        return (
        <tr key={quotes.id}>
            <td>{quotes.id}</td>
            <td>{quotes.quote}</td>
            <td>{quotes.author}</td>
        </tr>
     );
 })
}
    </tbody>
</table>          
</>
);
}

export default Fetch_Api