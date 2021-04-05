const express = require('express')
const app = express()
const port = 3000
const addCow = require('../db/database.js')
const getCow = require('../db/database.js')
const bodyParser = require('body-parser')

app.use(express.static('./client/dist'))

const host = 'localhost'

app.use(bodyParser.json()) 

app.get('/cows', (req, res) => {
    console.log('server: .get cows')
    getCow((err, cows) => {
        if(err) {
          console.log('error getting cows', err)
        } 
        res.json(cows)
    })
})

    // .then((cows) => {
    //     res.status(200).send(cows)
    // })
    // .catch((err) => {
    //     console.log('error getting cows', err)
    // })

app.post('/cows', (req, res) => {
    console.log('this is req.body', req.body)
    addCow(req.body.name, req.body.description)
    .then((input) => {
        console.log('success adding cow')
    })
    .catch((err) => {
        console.log('error posting cow data', err)
    })
})



app.listen(port, host, () => console.log(`Example app listening on ${host}:${port}!`))