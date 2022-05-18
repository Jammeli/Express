const express = require ('express')
const app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use('/api',require('./routers/views'))
app.listen(5001,(err)=>{
    if(err) throw err
    else console.log('Server is running on port 5001')
})

