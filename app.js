/* 
    Use npm body-parser to: 

    Parse incoming request bodies in a 
    middleware before your handlers, 
    available under the req.body property.
*/

const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

const server = app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});

app.set('view engine', 'pug');
app.set("views", "views");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) =>{
    res.status(200).render("landing");
});


