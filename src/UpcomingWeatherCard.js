import React from "react";
import "./styles.css";

export const UpcomingWeatherCard = (props) => {
  return props.fiveDayForecast.map((forecast, i) => {
    return (
      <div className="upcoming-weather-card" key={i}>
        <p className="day-of-week">{forecast.dayOfWeek}</p>
        <div className="temps">
          <p className="high-temp">Max-temp {Math.round(forecast.maxTemp)}°</p>
          <p className="low-temp">Min-temp {Math.round(forecast.minTemp)}°</p>
        </div>
      </div>
    );
  });
};
