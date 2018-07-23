const axios=require('axios');

const letLugarLatLng= async (direccion)=>{
    
    let encodedUrl = encodeURI(direccion);

    let result=await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }=AIzaSyCzoqNyHgkC2hLNXxcdSwypIbuXvNG2uoo`)
        if(result.data.status === 'ZERO_RESULTS') {
            throw new Error(`No hay resultados para la ciudad ${ dirección}`);
        }
        let location=result.data.results[0];
        let coors=location.geometry.location;    
    return {
        direccion: location.formatted_address,
        lat:  coors.lat,
        lng: coors.lng
    }
};

module.exports={
    letLugarLatLng
}

// let encodedUrl = encodeURI(argv.direccion);
// // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyCzoqNyHgkC2hLNXxcdSwypIbuXvNG2uoo`)
// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }+CA=AIzaSyCzoqNyHgkC2hLNXxcdSwypIbuXvNG2uoo`)
//     .then(result => {
//         let location=result.data.results[0];
//         let coors=location.geometry.location;
//         console.log(`Dirección: ${location.formatted_address}`);
//         console.log(`Latitud: ${ coors.lat }`);
//         console.log(`Longitud: ${ coors.lng }`);
//         // console.log(JSON.stringify(result.data, undefined, 2));
//     }).catch(err => console.log('Error', err));

//  module.exports={
//      argv
//  }