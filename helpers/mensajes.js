require('colors');

const mostrarMenu = () => {

    return new Promise (resolve => {
        console.clear();
        console.log('============================'.green)
        console.log(' Seleccione una opción'.green)
        console.log('============================\n'.green)
    
        console.log(`${ '1.'.green} Crear tarea`);
        console.log(`${ '2.'.green} Listar tareas`);
        console.log(`${ '3.'.green} Listar tareas completadas`);
        console.log(`${ '4.'.green} Listar tareas pendientes`);
        console.log(`${ '5.'.green} Completar tarea(s)`);
        console.log(`${ '6.'.green} Borrar tarea`);
        console.log(`${ '0.'.green} Salir \n`);
    
        /** Este método sirve para leer la opción || es un callback lo q hace es ejecutar el opt */
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opción:', (opt) => {
            console.log(opt);
            readline.close()
            resolve(opt);
        })
    });
 
}

/** Este método sirve para pausar || es un callback lo q hace es ejecutar el opt */
const pausa = () => {
    return new Promise (resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\n Presione ${'Enter'.green} para salir`, (opt) => {
            readline.close()
            resolve();
        })
    });
    
}

module.exports = {
    mostrarMenu,
    pausa
}