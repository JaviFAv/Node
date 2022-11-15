const fs = require('fs/promises');

async function asyncAwait() {

    let objeto = {
        name: "Javier",
        surname: "Fernandez",
        age: 30
    }

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