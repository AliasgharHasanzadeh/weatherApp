// in the next update add this:
// 1)get geolocayion with navigator
// 2)get the exact city with api (openCage Api)
// 3)add weekly forecast
// update page
let data = null;
async function fetchWeather(city) {
  loading.style.display = "block";
  const res = await fetch(url + city );
  data = await res.json();
  // console.log(data)
  loading.style.display = "none";
  setHeader()
  // daily forecast
 setForcastBus(0)
//  weekly forecast set
  weeklyForecastEl.forEach((item, index) => {



    item.addEventListener("click", function () {
      weeklyForecastEl.forEach(val=>{
        val.classList.remove('active')
      })
      item.classList.add('active')
      const day = item.getAttribute("data-day");
      setForcastBus(day)
    });
  });
}
fetchWeather("london");
btnSearch.addEventListener("click", function () {
  const temp = loc.value;
  fetchWeather(temp);
});

function setForcastBus(day){
  dayForcastEl.innerHTML = data.forecast.forecastday[day].date.replaceAll("-", "/") + " Forecast";
  forecastBoxEl.forEach((item, index) => {
    const time = index * 2;
    item.innerText = data.forecast.forecastday[day].hour[time].temp_c + " °C";
  });
  forecastBoxIConEl.forEach((item, index) => {
    console.log(`${index*2}AM:`,statusWeather(
      data.forecast.forecastday[day].hour[index*2].condition.code,
      data.forecast.forecastday[day].hour[index*2].is_day
    ))
    item.innerHTML = giveWeatherICon(
      statusWeather(
        data.forecast.forecastday[day].hour[index*2].condition.code,
        data.forecast.forecastday[day].hour[index*2].is_day
      )
    );
  });
}
function setHeader(){
  locEl.innerText = data.location.country + "," + data.location.name;
  tempEl.innerText = data.current.temp_c;
  feelsLike.innerText = "Feels " + data.current.feelslike_c + " °C";
  WeatherIcon.innerHTML = giveWeatherICon(
    statusWeather(data.current.condition.code, data.current.is_day)
  );
  WeatherStatusEl.innerText = toTitleCase(
    statusWeather(data.current.condition.code, data.current.is_day).replace(
      "_",
      " "
    ).replace('_',' ')
  );
  precipEl.innerHTML =
    precipSvg + "Precipitation : " + data.current.precip_mm + " mm";
  humidityEl.innerHTML =
    humiditySvg + "Humidity : " + data.current.humidity + " %";
  windEl.innerHTML = windSvg + " Wind : " + data.current.wind_kph + " kph";
}