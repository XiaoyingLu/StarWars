import axios from 'axios';

const url = 'https://swapi.dev/api/people/';

const errorHandler = (res, err) => {
    console.log(err);
    return res.status(500).json({
        message: "Internal Server Error",
        details: err
    });
}

const getHomePlanet = (homeworld) => {
    let homePlanet = {};
    return axios.get(homeworld)
    .then(response => {
        return response.data;
    }).then(data => {
        homePlanet["title"] = data.name;
        homePlanet["terrain"] = data.terrain;
        homePlanet["population"] = data.population;
        return homePlanet;
    }).catch(err => {
        return err;
    });
}

const getSpecies = (species) => {
    let result = [];
    return axios.all(species.map(specie => axios.get(specie)))
    .then(axios.spread((...args) => {
        for (let i = 0; i < args.length; i++) {
            let specieInstance = args[i].data;
            result = [ ...result,
                {
                    name : specieInstance.name,
                    averageLifespan : specieInstance.average_lifespan,
                    classification : specieInstance.classification,
                    language : specieInstance.language
                }]
        }
        return result;
    }))
    .catch(err => {
        return err;
    });
}

const getFilms = (films) => {
    let result = [];
    return axios.all(films.map(film => axios.get(film)))
    .then(axios.spread((...args) => {
        for (let i = 0; i < args.length; i++) {
            let filmInstance = args[i].data;
            result = [ ...result,
                {
                    title : filmInstance.title,
                    director : filmInstance.director,
                    producers : filmInstance.producer,
                    releaseDate : filmInstance.release_date
                }]
        }
        return result;
    })).catch(err => {
        return err;
    });
}

// get a specific people resource
export const getPersonById = (req, res, next) => {
    let person = {};
    axios.get(url + req.params.id)
    .then(response => {
        return response.data;
    }).then(data => {
        person["name"] = data.name;
        person["height"] = data.height;
        person["mass"] = data.mass;
        person["hairColor"] = data.hair_color;
        person["skinColor"] = data.skin_color;
        person["gender"] = data.gender;
        person["birthYear"] = data.birth_year;

        return axios.all([getHomePlanet(data.homeworld), getSpecies(data.species), getFilms(data.films)])  
    }).then(axios.spread((homePlanet, species, films) => {
        person["homePlanet"] = homePlanet;
        person["species"] = species;
        person["films"] = films;
        return res.status(200).json(person)
    })).catch(err => {
        return errorHandler(err);
    });
}