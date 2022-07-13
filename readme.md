A continuación se muestran enlaces e información que pueden ser de utilidad para implementar las llamadas API en tu web:

- La documentación de la API a consumir es la siguiente:

https://icanhazdadjoke.com/api

- Llamamiento para obtener un chiste:

https://icanhazdadjoke.com/

- Header para obtener los datos en el formato que nos interesa:

'Accept': 'application/json'

async function getJoke(){

//  const showData = await fetch("https://icanhazdadjoke.com/", {
//   headers:{
//  'Accept': 'application/json'
//   }
//  }); 
//  const jokeData = await showData.json();
//  showJoke.innerHTML = jokeData.joke; 
// }


*openweathermap key: 8ce94eb94483907489c836f74b88aa03*

- Ejercicio 3
Necesitarás generar un array llamado reportAcudits, en el que iremos guardando toda la información relativa al chiste que nos pide el cliente.
Los tres campos que debe tener cada objeto del array son:
{
  joke: "...",
  resultado: 1,
  date: ...
}
- La fecha de cuándo se hizo la valoración deberás guardarla en formato ISO.
->JavaScript Date toISOString().
- El campo score tiene un rango del 1 al 3, siendo un 1 la peor puntuación. Deberás implementar 3 botones entre el chiste y el botón para cargar el siguiente chiste, para que el usuario pueda puntuarlo.
Con la puntuación del chiste, junto con el chiste y generando una fecha, deberás ir cumplimentando el array reportJokes.
*Cuando vayas actualizando este array, mostrando por consola su contenido será suficiente.*

organic-looking SVG shape



dad jokes:
 fetch(`${API_Jokes}`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((data) => data.json())
    .then((jokeData) => (showJoke.innerHTML = jokeData.joke));
  console.log(showJoke);
  return (showJoke);



  class Fetch {
  async getCurrent(input) {
    const myKey = "2eed57299caad3ac33176bb5ad74f5c9";
    //make request to url
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
}
