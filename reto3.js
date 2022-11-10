let objeto = {
    name: "",
    surname: "",
    age: 0
}

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nombre: ', (answer) => {
    objeto.name = answer;
    rl.question('Apellido: ', (answer) => {
        objeto.surname = answer;
        rl.question('Edad: ', (answer) => {
            objeto.age = answer;
            rl.close();
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
        });

    });

});

