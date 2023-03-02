const express = require('express');
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const connect = require('./src/config/db');
const app = express();
const cors = require('cors');
const random = require("./src/routes/random.route")
app.use(express.json());

app.use(cors());
app.use("/random", random);

app.listen(PORT, async () =>{
    
    try{
        await connect();
console.log('listening on port');
    }
    catch(e){
        console.log(e)
    }
})
