let objeto = {
    name: "Javier",
    surname: "Fernandez",
    age: 30
}



const fs = require('fs');

var objJson = JSON.stringify(objeto);
fs.writeFile("objeto.json", objJson,
    (error) => {
        if (error)
            console.log(error);
        else {
            console.log("Fichero escrito correctamente\n");
            console.log(JSON.parse(fs.readFileSync("objeto.json", "utf8")));
        }
    });