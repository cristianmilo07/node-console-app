import colors from 'colors';
import { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } from './helpers/inquirer.js';
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
            //console.log(tareas.listadoArr)
            tareas.listadoCompletado()
        break;

        case '3': //listar completadas
            tareas.listarPendientesCompletadas()
        break;

        case '4': //listar completadas
            tareas.listarPendientesCompletadas(false)
        break;

        case '5': // completado | pendiente
            const ids = await mostrarListadoChecklist( tareas.listadoArr );
            tareas.toggleCompletadas( ids );
        break;

        case '6': // Borrar
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if ( id !== '0' ) {
                    const ok = await confirmar('¿Está seguro?');
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                    }
                }
        break;
        

    }

    guardarDB(tareas.listadoArr);

     await pausa();

  } while (opt !== '0');
};
 

main();