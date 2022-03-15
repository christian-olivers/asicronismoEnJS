const fechData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        const data = await fechData(url_api);
        const character = await fechData(`${API}${data.results[0].id}`);
        const origin = await fechData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    }catch (err){
        console.error(err);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');