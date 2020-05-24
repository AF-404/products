require('./db.js')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var categoryRoutes = require('./controllers/categoryController')
var productRoutes = require('./controllers/productController')


var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(3500,()=>console.log('Server started at : 3500'))


app.use('/category',categoryRoutes)
app.use('/product',productRoutes)
app.use(express.static('public'))
