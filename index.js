const express =require('express')
const mongoose =require('mongoose')
const bodyParser=require('body-parser')
const cors = require('cors')
const routes = require('./routes')



const app = express()
mongoose.Promise=global.Promise
mongoose.connect(
    'mongodb://localhost/deportes',
    {useNewUrlParser:true}
    )

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',routes())

//app.get('/',(req,res)=>{
 //   res.send('mi mongo 2024')
//})
app.listen(5000,()=>{
    console.log('server listen 5000')
})