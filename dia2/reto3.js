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
        fs.writeFile("objeto.json", JSON.stringify(objeto))
            .then(() => {
                return fs.readFile('objeto.json', 'utf8')
            })
            .then(data => {
                console.log("Fichero escrito correctamente\n");
                console.log(JSON.parse(data));
            })
            .catch(err => {
                console.log(err);
            })
    })


