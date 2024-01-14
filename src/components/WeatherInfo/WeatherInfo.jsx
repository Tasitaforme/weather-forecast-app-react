import React from 'react';

export default function WeatherInfo({ data }) {
  //   console.log(data);
  return (
    <div className="d-flex flex-column m-0 p-0 justify-content-start align-items-center">
      <h1>{data.city}</h1>

      <h2>{data.description}</h2>

      <img src={data.icon} alt={data.description} />

      <div className="col-auto">
        <span className="temperature h3">{Math.round(data.temperature)}</span>
        <span className="degree celsius h3">°С</span>
      </div>

      <ul className="list-group">
        <li className="list-group-item border-0">
          Humidity: <span>{data.humidity}</span>%
        </li>
        <li className="list-group-item border-0">
          Wind: <span>{Math.round(data.wind)}</span> km/h
        </li>
      </ul>
    </div>
  );
}
