const apiWeather = "https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js"
const dad_jokes = "https://icanhazdadjoke.com/";
const cn_jokes =
  "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random/";
const button = document.querySelector(".container button");
const showJoke = document.querySelector(".container p");
button.addEventListener("click", getJoke);
function getJoke() {
  const daddyJokes = function daddyJokes() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-RapidAPI-Key": "0b987aac1fmsh26353f794f8c1e5p19b1d0jsnacbe6cb14c3e",
        "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
      },
    };
    fetch(cn_jokes, options)
      .then((res) => res.json())
      .then((json) => console.log((showJoke.innerHTML = json.value)))
      .catch((err) => console.error("error:" + err));
  };
  const chuckJokes = function chuckJokes() {
    fetch(`${dad_jokes}`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((jokeData) => (showJoke.innerHTML = jokeData.joke));
    return showJoke;
  };
  const randomJoke = [chuckJokes(), daddyJokes()];
  const result = randomJoke[Math.floor(Math.random() * randomJoke.length)];
  console.log(result);
  //return result;
}
// API WEATHER =>
window.weatherWidgetConfig = window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
  selector: ".weatherWidget",
  apiKey: "GYDQZ3SVWYUPQPEUUJDYAGSAV&", 
  location: "Barcelona, SPAIN", 
  unitGroup: "metric", 
  forecastDays: -1, //forecast days to show
  title: "BARCELONA", 
  showTitle: true,
  showConditions: true,
  });
(function () {
  var d = document,
    s = d.createElement("script");
  s.src = `${apiWeather}`;
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
// END APi Weather

//animation button =>
var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");
  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};
var bubblyButtons = document.getElementsByClassName("bubbly-button");
for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
//End animation button

const theDate = function dateReport() {
  let currentDate = new Date();
  let time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  return `${currentDate.toISOString()} // BCN-Time => ${time}`;
};

let cartResult = [];
function theReport(noteChoose, result) {
  let reportAcudits = [
    { joke: showJoke.innerHTML, score: result, date: theDate() },
  ];
  for (let i = 0; i < reportAcudits.length; i++) {
    const noteFound = cartResult.find(
      (score) => score === reportAcudits[i].score
    );
    if (noteFound != undefined) {
      var notePlace = cartResult.indexOf(noteFound);
      cartResult[notePlace].score++;
    } else {
      let note = reportAcudits[i];
      note.score = noteChoose;
      cartResult.push(note);
      console.log(cartResult);
    }
  }
}
function noteChoose(note) {
  var result = (document.querySelector(".qualification").valueAsDate = note);
  console.log(result);
  return result;
}
