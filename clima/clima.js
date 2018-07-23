const axios=require('axios');

const getClima=async(lat, lng)=>{

    let resp=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=2a572a3f49bfd3911173d4eefb2240f6`);
    return resp.data.main.temp;
}

module.exports={
    getClima
}
