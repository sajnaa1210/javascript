{/*console.log('start');
for(let i=0;i<5_000_000_000;i++){}
setTimeout(()=>{
    console.log("Hello World!");
},2000)
setTimeout(()=>{
    console.log("Hello World2!");
},0)
Promise.resolve().then(()=>{
    console.log("Calling promise");
})
console.log('end');*/}

//pushed to callstack -> pop()
//callback, microtask queue(set)
//macrotask queue(promise)
//pushed to callstack -> pop()
//promise --> microtask
//settimeout,callback,settimeinterval --> microtask
//event loop ---> callstack -> microtask -> macrotas


//modules -> os, fs, path, http


//
{/*const os=require('os')
console.log(os);
console.log(os.freemem());
console.log(os.hostname());
const fs=require('fs');
fs.writeFile('Data.txt','Node js Content',(data,err)=>{
console.log("File is created...");
})
fs.appendFile('Data.txt',"\n Adding express js",(err,data)=>{
    if(err) throw new err;
    console.log("Data Updated");
})
fs.readFile('Data.txt','utf-8',(err,data)=>{
    if(err) throw new err;
    console.log(data);
})

fs.unlink('Data.txt',()=>{
    console.log("File deleted..");
})*/}


{/*const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 5000;

const server = http.createServer((req, res) => {

    console.log(req.url);

    // Home page
    if (req.url === '/home') {

        fs.readFile(path.join(__dirname, 'home.html'), 'utf-8', (err, data) => {

            if (err) {
                res.writeHead(500, { 'content-type': 'text/plain' });
                res.end('Error loading home page');
                return;
            }

            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        });

    }

    // Contact page
    else if (req.url === '/contact') {

        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('<h1>Display Contact Page</h1>');

    }

    // Products page
    else if (req.url === '/products') {

        res.writeHead(200, { 'content-type': 'application/json' });

        const product = [
            { prod_id: 100, prod_name: 'Mobile' },
            { prod_id: 101, prod_name: 'Laptop' }
        ];

        res.end(JSON.stringify(product));

    }

    // Page not found
    else {

        res.writeHead(404, { 'content-type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');

    }

});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});*/}


const express = require('express');

const PORT = 4000;

const server = express();

server.get('/home', (req, res) => {
    res.status(200).send("Welcome to home page");
});
server.get('/products',(req,res)=>{
    const product=[{prod_id:100,prod_name:'Mobile'},{
            prod_id:101,prod_name:'Laptop'
        }
    ]
    res.end(JSON.stringify(product))
})
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});