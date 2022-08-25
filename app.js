const express = require('express')
const lists = require('./routes/lists')
const app = express()

app.use(express.json())
app.use('/lists', lists)

app.get('/', (req, res) => {
    res.send('welcome')
})


const PORT = 5000
app.listen(PORT, () => { console.log('server listening') })