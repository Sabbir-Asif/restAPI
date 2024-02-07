const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/',(req, res) =>{
    res.send('<h1>Hello World!<h1>')
})

app.get('/posts',(req,res) =>{
    res.send('<h1> I am post page.<h1>')
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})