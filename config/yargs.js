const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        description: "Base de la tabla",
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Muestra por consola la informacion de la tabla'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        description: 'El limite de la tabla de multiplicacion'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        if (isNaN(argv.h)){
            throw 'El limite tiene que ser un numero'
        }
        if(argv.h<1){
            throw 'El limite tiene que ser un numero mayor a 0'
        }
        return true;
    })
    .argv;


module.exports = argv