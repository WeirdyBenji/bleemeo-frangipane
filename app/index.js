#!/usr/bin/env node

const app = require("express")()
const prom = require("prom-client")

const PORT = process.env.PORT || 8000
const TITLE = "Frangipane"

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`${TITLE} listening on port ${PORT}`)
})