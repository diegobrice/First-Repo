const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

function obtenerPersonaje(id) {
  //variable url a consultar
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  //se crea un objeto
  var _httpRequest = new XMLHttpRequest();
  //conexion con la api
  //GET metodo para hacer la consulta
  //URL donde se consulta los datos
  //true indica la peticion sera asincrona
  _httpRequest.open("GET", url, true);
  //se especifica la funcion callback
  _httpRequest.onreadystatechange = function (datos) {
    //si la operacion fue completa y el estatus fue exitoso
    if (_httpRequest.readyState == 4 && _httpRequest.status == 200) {
      //regresa un string que lo pasamos a objeto con json.parse
      var personaje = JSON.parse(_httpRequest.responseText);
      console.log(`Hola yo soy ${personaje.name}`);
    }
  };
  //se envia la solicitud
  _httpRequest.send(null);
}

obtenerPersonaje(1);
