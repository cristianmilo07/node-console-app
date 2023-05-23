import { Tarea } from './tarea.js';

class Tareas {
    

    _listado = {};

    get listadoArr() {
        
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push ( tarea );
        });

        return listado;
    }

    constructor() {
        this._listado = {}
    }

    cargarTareasFromArray (tareas){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })
       
    }

    crearTarea(desc = '') {

        const tarea = new Tarea( desc)
        this._listado[tarea.id] = tarea
        
    }

    listadoCompletado(){
        //1: en verde
        // Completada: verde
        // Pendiente en rojo

        this.listadoArr.forEach((tarea, i) => {
        const idx = `${i + 1}`.green;
        const { desc, completadoEn } = tarea;
        const estado = ( completadoEn ) 
                            ? 'Completada'.green
                            : 'Pendiente'.red;

        console.log(`${ idx } ${ desc } :: ${ estado }`);
        });
    }

    listarPendientesCompletadas( completadas = true ) {
        
    }
    
    
}

export { 
    Tareas
   };