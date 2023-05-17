import colors from 'colors';
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
 
console.clear();
 
const main = async () => {


  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if( tareasDB) {
    tareas.cargarTareasFromArray(tareasDB)
  }

  //await pausa();
  do {
    //imprimir el menú
    opt = await inquirerMenu();

    
    switch (opt) {
        case '1':
            // crear opción
            // Create option task
            const desc = await leerInput('Description:');
            console.log(desc);
            tareas.crearTarea(desc);
        break;
        
        case '2':
            console.log(tareas.listadoArr)
        break;
        

    }

    //guardarDB(tareas.listadoArr);

     await pausa();

  } while (opt !== '0');
};
 

main();