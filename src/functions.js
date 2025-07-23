// selctors
// const url =
  // "https://api.weatherapi.com/v1/forecast.json?key=ac536607e96a42aa955142040251907&q=";
const url =
  "https://weatherapp.majid-samurai2006.workers.dev/?city=";
const loading = document.getElementById("loading-animation");
// header selectors
const btnSearch = document.getElementById("search"); //button to start serach and fetch
const loc = document.getElementById("loc"); //in this user write the city
const locEl = document.getElementById("locEl"); //in this element you write the city
// 2nd padrt selectors
const dateEl = document.getElementById("dateEl"); //date
dateEl.innerText = getDate();
const tempEl = document.getElementById("temp");
const feelsLike = document.getElementById("feelsLike");
const WeatherIcon = document.getElementById("WeatherIcon");
const WeatherStatusEl = document.getElementById("WeatherStatusEl");
const precipEl = document.getElementById("precipEl");
const humidityEl = document.getElementById("humidityEl");
const windEl = document.getElementById("windEl");
// dayly Forecast
const forecastBoxEl = document.querySelectorAll('.forecastTemp')
const forecastBoxIConEl = document.querySelectorAll('.forecastTempIcon')
const dayForcastEl = document.getElementById('dayForcastEl')
// weekly Forecast
const weeklyForecastEl = document.querySelectorAll('.weeklyForecastEl')

function statusWeather(conditionCode, isDay) {
  const dayNight = isDay ? "_day" : "_night";

  if ([1000].includes(conditionCode)) return "clear" + dayNight;
  if ([1003].includes(conditionCode)) return "partly_cloudy" + dayNight;
  if ([1006, 1009].includes(conditionCode)) return "cloudy";
  if ([1030, 1135, 1147].includes(conditionCode)) return "fog";
  if ([1063, 1150, 1153, 1180, 1183, 1240, 1249, 1252].includes(conditionCode))
    return "light_rain";
  if ([1186, 1189, 1192, 1195, 1243, 1246].includes(conditionCode))
    return "heavy_rain";
  if ([1087, 1273, 1276].includes(conditionCode)) return "thunderstorm";
  if (
    [
      1066, 1069, 1072, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258,
    ].includes(conditionCode)
  )
    return "snow";
  if ([1261, 1264].includes(conditionCode)) return "sleet";
  if ([1117].includes(conditionCode)) return "blizzard";

  return "unknown";
}
function giveWeatherICon(weatherStatus) {
  if (weatherStatus == "clear_day") {
    return clearDaySvg;
  } else if (weatherStatus == "clear_night") {
    return clearNightSvg;
  }else if(weatherStatus == 'partly_cloudy_day'){
    return partlyCloudyDay
  }else if( weatherStatus  == 'partly_cloudy_night'){
    return partlyCloudyNight
  }else if(weatherStatus == 'cloudy'){
    return cloudyPng
  }else if(weatherStatus == 'light_rain'){
    return lightRainPng
  }else if(weatherStatus == 'heavy_rain'){
    return heavyRainPng
  }else if(weatherStatus =='fog'){
    return fogPng
  }else if(weatherStatus == 'snow'){
    return snowPng
  }else if(weatherStatus == 'sleet'){
    return sleetPngPng
  }else if(weatherStatus =='blizzard'){
    return blizzardPng
  }else{
    return 'undefind'
  }
}
function getDate() {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

var animation = lottie.loadAnimation({
  container: document.getElementById("loading-animation"), // عنصر نمایش انیمیشن
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "src/loading/loading.json",
});
