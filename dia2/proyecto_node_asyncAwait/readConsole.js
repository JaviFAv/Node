const fs = require('fs/promises');

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

async function readConsole(callback) {

    try {
        objeto.name = await pregunta("Nombre: ")
        objeto.surname = await pregunta("Apellido: ")
        objeto.age = await pregunta("Edad: ")
        callback(objeto)

    } catch (error) {
        console.log(error)
    }
}

module.exports = readConsole;


