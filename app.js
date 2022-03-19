const express = require('express')
const app = express()
app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.render('index')
})
const port = process.env.PORT || '8080'
app.listen(port)
