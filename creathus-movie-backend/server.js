const express = require('express')
const routes = require('./routes')

const app = express()
app.use(routes);

require('./src/database')

app.listen(4000,()=>{
    console.log("Server started")
})
