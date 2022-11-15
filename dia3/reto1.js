const express = require("express")
const app = express()

app.get("/", function (req, res) {
    console.log('Peticion recibida del cliente')
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers["user-agent"])
    res.status(200).json({ ok: true, mensaje: "Recibido!" })
})

app.get('/bye', function (req, res) {

    console.log('Peticion recibida del cliente')
    res.status(200).json({ ok: true, mensaje: "Adios!" })
})

app.listen(4000)