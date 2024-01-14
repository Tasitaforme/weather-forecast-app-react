import React, { useState } from 'react';
import axios from 'axios';
import { Form, InputGroup, Button } from 'react-bootstrap';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherForecast from '../WeatherForecast/WeatherForecast';

export default function Search() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [validated, setValidated] = useState(false);

  function handleResponse(response) {
    setLoaded(true);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    const form = event.currentTarget;
    console.log(form);
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false);
      return;
    }
    setValidated(true);

    event.preventDefault();
    const { REACT_APP_API_KEY: API_KEY, REACT_APP_API_URL: API_URL } =
      process.env;
    console.log(API_KEY);
    console.log(API_URL);
    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const apiUrl = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <InputGroup hasValidation>
          <Form.Control
            required
            type="text"
            placeholder="Enter a city to search for weather..."
            aria-label="search a city"
            aria-describedby="basic-addon2"
            autoComplete="off"
            autoFocus="on"
            name="city"
            variant="secondary"
            onChange={updateCity}
          />

          <Button
            type="submit"
            variant="secondary"
            id="button-addon2"
            className=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
              role="img"
              aria-label="search-button"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Button>
        </InputGroup>
      </Form>
      {loaded && <WeatherInfo data={weatherData} />}
      {loaded && <WeatherForecast coordinates={weatherData.coordinates} />}
    </>
  );
}
