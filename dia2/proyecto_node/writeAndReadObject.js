const fs = require('fs/promises');

function writeAndRead(path, objeto) {
    fs.writeFile(path, JSON.stringify(objeto))
        .then(() => {
            return fs.readFile(path, 'utf8')
        })
        .then(data => {
            console.log("Fichero escrito correctamente\n");
            console.log(JSON.parse(data));
        })
}

module.exports = writeAndRead;
