const Professional = require("../professional");
let professional = null;
function getStart(req, res) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    res.send(respuesta);
}

function getProfessional(req, res) {
    let respuesta;
    if (professional != null)
        respuesta = professional;
    else
        respuesta = { error: true, codigo: 200, mensaje: "El profesional no existe" };

    res.send(respuesta);
}

function postProfessional(req, res) {
    let respuesta;
    console.log(req.body)
    if (professional === null) {
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

        respuesta = { error: false, codigo: 200, mensaje: "Profesional creado", resultado: professional };
    }
    else
        respuesta = { error: true, codigo: 200, mensaje: "Profesional ya existe", resultado: null };

    res.send(respuesta)
}

function putProfessional(req, res) {
    let respuesta;
    if (professional != null) {
        professional.name = req.body.name;
        professional.age = req.body.age;
        professional.weight = req.body.weight;
        professional.height = req.body.height;
        professional.isRetired = req.body.isRetired;
        professional.nationality = req.body.nationality;
        professional.oscarsNumber = req.body.oscarsNumber;
        professional.profession = req.body.profession;

        respuesta = { error: false, codigo: 200, mensaje: "Profesional Actualizado", resultado: professional }
    }
    else
        respuesta = { error: true, codigo: 200, mensaje: "El profesional no existe", resultado: professional }

    res.send(respuesta);
}

function deleteProfessional(req, res) {
    let respuesta;
    if (professional != null) {
        professional = null;

        respuesta = { error: false, codigo: 200, mensaje: "Profesional borrado", resultado: professional }
    }
    else
        respuesta = { error: true, codigo: 200, mensaje: "El profesional no existe", resultado: professional }

    res.send(respuesta);
}


module.exports = { getStart, getProfessional, postProfessional, putProfessional, deleteProfessional }