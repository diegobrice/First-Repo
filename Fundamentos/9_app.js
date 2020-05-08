const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

// const luke_url = "https://swapi.dev/api/people/1");
// const luke_url = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };

const onResponse = function (person) {
  console.log(`Hola, yo soy ${person.name}`);
};

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, onResponse);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
