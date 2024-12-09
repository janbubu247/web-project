const corsProxy = "https://cors-anywhere.herokuapp.com/";
const apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=busan&appid=1992acd757593192e5b6ed69c774d2f2";

fetch(corsProxy + apiUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Failed to retrieve location:", error));
