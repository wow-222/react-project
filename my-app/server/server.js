const express = require('express')
const userRouter = require('./user')
//新建APP
const app = express()

app.use('/user',userRouter)
app.listen(9093,function(){
  console.log('node')
})