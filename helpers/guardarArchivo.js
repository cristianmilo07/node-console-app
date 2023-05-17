import * as fs from 'fs';

const archivo = './db/data.json';
const guardarDB = (data) => {
    fs.writeFileSync (archivo, JSON.stringify(data))
    
}

const leerDB = () => {
    if(!fs.existsSync(archivo)) {
        return null
    }

    const inf = fs.readFileSync(archivo, { encoding: 'utf-8'});
    const data = JSON.parse(inf);
    console.log(inf);
    console.log(data);

    return data;
}

export { 
    guardarDB,
    leerDB
   };