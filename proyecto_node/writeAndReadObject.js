const fs = require('fs');

function writeAndRead(path, obj) {
    let objJson = JSON.stringify(obj);
    fs.writeFile(path, objJson,
        (error) => {
            if (error)
                console.log(error);
            else {
                console.log("Fichero escrito correctamente\n");
                console.log(JSON.parse(fs.readFileSync(path, "utf8")));
            }
        });
}

module.exports = writeAndRead;