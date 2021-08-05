import React, { useState } from "react";
import "./styles.css";
import UpcomingWeather from "./UpcomingWeather";

const api = {
  key: "86a91baa8ae718ce8ca33d3bb4914ec7",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    // if (evt.key === "Enter") {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        // setQuery("");
        console.log(result);
      });
    // }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            list="places"
            className="search-bar"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={search}
            // onKeyPress={search}
          />
          <datalist id="places">
            <option>---Select---</option>
            <option>Kolkata</option>
            <option>Mumbai</option>
            <option>Chennai</option>
            <option>Delhi</option>
            <option>Pune</option>
            <option>Patna</option>
            <option>Hyderabad</option>
            <option>Australia</option>
            <option>Antarctica</option>
          </datalist>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div className="body">
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{weather.main.temp}°c</div>
              <div className="weather">
                {weather.weather[0].description.toUpperCase()}
                <br />
                Humidity:{weather.main.humidity} °F
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <UpcomingWeather location={query} />
      </main>
      <footer>
        <h4>
          Made by <i>Shayak Roychowdhury</i>
        </h4>
      </footer>
    </div>
  );
}

export default App;
