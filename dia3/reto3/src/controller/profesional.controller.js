const Professional = require("../professional");
let professional = null;
let professionals = [];
function getStart(req, res) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    res.send(respuesta);
}

function getProfessional(req, res) {
    let respuesta;
    let id = req.query.id;
    if (professionals[id] != null && (id))
        respuesta = professionals[id];
    else if (!id) {
        respuesta = professionals;
    } else
        respuesta = { error: true, codigo: 200, mensaje: "El profesional no existe" };

    res.send(respuesta);
}

function postProfessional(req, res) {
    let respuesta;
    console.log(req.body)
    professional = new Professional(
        this.name = req.body.name,
        this.age = req.body.age,
        this.weight = req.body.weight,
        this.height = req.body.height,
        this.isRetired = req.body.isRetired,
        this.nationality = req.body.nationality,
        this.oscarsNumber = req.body.oscarsNumber,
        this.profession = req.body.profession
    )
    professionals.push(professional);

    respuesta = { error: false, codigo: 200, mensaje: "Profesional creado", resultado: professionals };


    res.send(respuesta)
}

function putProfessional(req, res) {
    let respuesta;
    let id = req.query.id;
    if (professionals[id] != null && (id)) {
        professionals[id].name = req.body.name;
        professionals[id].age = req.body.age;
        professionals[id].weight = req.body.weight;
        professionals[id].height = req.body.height;
        professionals[id].isRetired = req.body.isRetired;
        professionals[id].nationality = req.body.nationality;
        professionals[id].oscarsNumber = req.body.oscarsNumber;
        professionals[id].profession = req.body.profession;

        respuesta = { error: false, codigo: 200, mensaje: "Profesional Actualizado", resultado: professional }
    }
    else
        respuesta = { error: true, codigo: 200, mensaje: "El profesional no existe", resultado: professional }

    res.send(respuesta);
}

function deleteProfessional(req, res) {
    let respuesta;
    let id = req.query.id;
    if (professionals[id] != null) {
        professionals.splice(id, 1);

        respuesta = { error: false, codigo: 200, mensaje: "Profesional borrado", resultado: professionals }
    }
    else
        respuesta = { error: true, codigo: 200, mensaje: "El profesional no existe", resultado: professionals }

    res.send(respuesta);
}

module.exports = { getStart, getProfessional, postProfessional, putProfessional, deleteProfessional }