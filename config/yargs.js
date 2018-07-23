const lugar=require('../lugar/lugar');
const clima=require('../clima/clima');

const direccion={
    alias: 'd',
    desc:'dirección de la ciudad para obtener el clima',
    demand: true
};
const argv=require('yargs').options({direccion}).argv;
// console.log(argv.direccion);

let getInfo=async(direccion)=>{
    try {
        let coors=await lugar.letLugarLatLng( direccion );
        let temperatura=await clima.getClima( coors.lat, coors.lng );
        return `El clima en ${ coors.direccion } es de ${ temperatura }`;
    } catch (error) {
        return `No se puede determinar el clima en ${ direccion }`;
    }
}

getInfo(argv.direccion).then(mensaje=>console.log(mensaje)).catch(e=>console.log(e))

module.exports={
    argv
}



// lugar.letLugarLatLng(argv.direccion).then(resp=>{
//     console.log(resp)
// }).catch(e=>console.log(e));

// clima.getClima(-12.0686357, -75.21029759999999)
// .then(temp=> console.log(temp))
// .catch(e=>console.log(e));