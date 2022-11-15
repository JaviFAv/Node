let writeAndRead = require('./writeAndReadObject.js');
let readConsole = require('./readConsole.js');



readConsole(function (obj) {
    writeAndRead("objeto.json", obj)
});