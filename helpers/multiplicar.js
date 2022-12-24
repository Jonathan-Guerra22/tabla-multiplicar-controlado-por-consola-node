const fs = require('fs');

const crearArchivo = async(value = 5, listar, hasta) => {

    try{
        
        let nombreArchivo = `tabla-${value}.txt`;
        let salida = "";

        for (let i = 0; i <= hasta; i++) {
            salida += `${value} x ${i} = ${value * i}\n`;
        }

        if(listar){
            console.log("=======================");
            console.log("     Tabla del " + value);
            console.log("=======================");    
            console.log(salida);
        }

        fs.writeFileSync(`./files/${nombreArchivo}`, salida);

        return nombreArchivo
        
    }catch(err){
        throw "No se pudo crear el archivo"
    }   
}

module.exports={
    crearArchivo
}