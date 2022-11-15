const fs = require('fs/promises');

function readConsole(callback) {

    let objeto = {
        name: "",
        surname: "",
        age: 0
    }


    const readline = require("readline")

    function pregunta(pregunta) {
        const question = new Promise((resolve, reject) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question(pregunta, (respuesta) => {
                resolve(respuesta);
                rl.close();
            })
        })
        return question;
    }

    pregunta("Nombre: ")
        .then((answer) => {
            objeto.name = answer;
        })
        .then(() => {
            return pregunta("Apellido: ")
        })
        .then((answer) => {
            objeto.surname = answer;
        })
        .then(() => {
            return pregunta("Edad: ")
        })
        .then((answer) => {
            objeto.age = answer;
        })
        .then(() => {
            callback(objeto);
        })

        .catch(err => {
            console.log(err);
        })



}

module.exports = readConsole;


