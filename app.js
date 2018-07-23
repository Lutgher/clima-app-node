// const direccion={
//     alias: 'd',
//     desc:'dirección de la ciudad para obtener el clima',
//     demand: true
// };
// const argv=require('yargs').options({direccion}).argv;
//  console.log(argv.direccion);

const argv=require('./config/yargs').argv;
console.log(argv);

