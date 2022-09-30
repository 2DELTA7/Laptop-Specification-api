const express = require('express');
const app = express();
const PORT = 3000;

const data = require('data.json');
app.use(express.json());

app.get('/', (req,res)=>{
    return res.json(
        {
            message: "Horror Movies API"
        }
    )
});

//any random
app.get('/random', (req,res)=>{
    const numberOfElements = data.length;
    const randomNumber = parseInt(Math.random()*numberOfElements);
    return res.json(data[randomNumber])
});

//list


// app.listen(5000, ()=>{
//     console.log("Server has stated");
// });

module.exports = app;

