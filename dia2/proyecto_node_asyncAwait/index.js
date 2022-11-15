const fs = require('fs/promises');

let writeAndRead = require('./writeAndReadObject.js');
let readConsole = require('./readConsole.js');


readConsole(function (objeto) {
    writeAndRead("objeto.json", objeto)
});