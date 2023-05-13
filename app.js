import colors from 'colors';
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';
 
console.clear();
 
const main = async () => {


  let opt = '';
  const tareas = new Tareas();


  do {
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
            console.log(tareas._listado)
        break;
        

    }

     await pausa();

  } while (opt !== '0');
};
 

main();