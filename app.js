const express = require("express");
const moment = require('moment');

const contacts = require('./contacts.json');

const app = express();  // app веб сервер

// app.get('/', (request, response)=>{
//     response.send('<h2>Home page</h2>');
// });

// app.get('/contacts', (request, response)=>{
//     console.log(request.url);
//     console.log(request.method);
//     response.send('<h2>Contacts page</h2>');
// });

// app.listen(3000, ()=> console.log('Server running'));

// _________________________________________________________________


// app.get('/contacts', (req, res)=>{
//     res.json(contacts);
// // res.send(contacts);
// })


// app.listen(3000, ()=> console.log('Server running'));
// _________________________________________________________________


// app.use((req, res, next)=>{
// console.log('First middleware');
// next();
// });

// app.use((req, res, next)=>{
//     console.log('Second middleware');
//     next();
//     });

app.get('/products', (request, response)=>{
    response.json([]);
});

app.get('/contacts', (req, res)=>{
    res.json(contacts);
// res.send(contacts);
});

app.listen(3000, ()=> console.log('Server running'));