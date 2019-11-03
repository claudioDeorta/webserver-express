const http = require('http');

http.createServer((req, rest) => {

    rest.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Claudio',
        edad: 33,
        url: req.url
    }

    rest.write(JSON.stringify(salida));
    // rest.write('Hola Mundo');
    rest.end();


}).listen(8080);

console.log('Esta escuchando el puerto 8080');