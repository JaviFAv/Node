const readline = require('readline');

let objeto = {
    name: "",
    surname: "",
    age: 0
}

const readConsole = (callback) => {
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
                callback(objeto);

            });

        });

    });

}

module.exports = readConsole;



