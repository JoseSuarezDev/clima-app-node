const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUlr}`,
        headers: {
            'x-rapidapi-key': 'd000e0974dmsh3108caa73223888p15f41cjsn73f645cc7261',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    });

    const resp = await instance.get();

    if (resp.data.cod == 404) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = `${data.name}, ${data.sys.country}`;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}