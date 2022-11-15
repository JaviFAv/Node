const fs = require('fs/promises');

let objeto = {
    name: "Javier",
    surname: "Fernandez",
    age: 30
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

async function asyncAwait() {
    objeto.name = await pregunta("Nombre: ")
    objeto.surname = await pregunta("Apellido: ")
    objeto.age = await pregunta("Edad: ")

    try {
        await fs.writeFile("objeto.json", JSON.stringify(objeto))

        const nuevo = await fs.readFile('objeto.json', 'utf8')

        console.log("Fichero escrito correctamente\n");
        console.log(JSON.parse(nuevo));
    } catch (error) {
        console.log(error)
    }

}

asyncAwait()