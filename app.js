const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const cors = require('cors');
dotenv.config({path:'./config.env'})


const Cities = JSON.parse(fs.readFileSync(`${__dirname}/data/cities.json`))
const app = express()
app.use(cors())

app.get('/api/v1/cities',(req,res,next)=>{
    res.status(200).json({
        status:'success',
        data:{
            Cities
        }
    })
    next()
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})