const fs = require('fs/promises');

async function writeAndRead(path, objeto) {

    try {
        await fs.writeFile(path, JSON.stringify(objeto))

        const nuevo = await fs.readFile(path, 'utf8')

        console.log("Fichero escrito correctamente\n");
        console.log(JSON.parse(nuevo));
    } catch (error) {
        console.log(error)
    }
}

module.exports = writeAndRead;
