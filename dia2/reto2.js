const fs = require('fs/promises');

let objeto = {
    name: "Javier",
    surname: "Fernandez",
    age: 30
}


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

