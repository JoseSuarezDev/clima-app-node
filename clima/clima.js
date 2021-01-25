const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6ae49212f3406d65078fe9a6a3b93f87&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}