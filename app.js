const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar')


console.clear()


//console.log(process.argv);
//console.log(argv);

//console.log('base: ' + argv.base);
//console.log('listar: ' + argv.listar);


const base = argv.base;
const listar = argv.listar
const hasta = argv.hasta

crearArchivo(base, listar, hasta)
    .then(msg => console.log('Se creo el archivo: ' + msg))
    .catch(err => console.log(err))