#!/usr/bin/env node

const app = require("express")()
const prom = require("prom-client")

const PORT = process.env.PORT || 8000
const TITLE = "Frangipane"

app.get('/metrics', (req, res) => {
    res.set('Content-Type', prom.register.contentType)
    res.end(prom.register.metrics())
})

app.use('*', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.listen(PORT, () => {
    console.log(`${TITLE} listening on port ${PORT}`)
})