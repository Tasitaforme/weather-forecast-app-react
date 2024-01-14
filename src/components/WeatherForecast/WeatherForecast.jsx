import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function WeatherForecast() {
  return (
    <div className="row text-center justify-content-center ">
      <div className="col-2 col-card">
        <div className="card card-border">
          <div className="card-body">
            <p className="card-day">Tue</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
            <p>25°</p>
          </div>
        </div>
      </div>
      <div className="col-2 col-card">
        <div className="card card-border">
          <div className="card-body">
            <p className="card-day">Wed</p>
            <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
            <p>25°</p>
          </div>
        </div>
      </div>
      <div className="col-2 col-card">
        <div className="card card-border">
          <div className="card-body">
            <p className="card-day">Thu</p>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
            <p>27°</p>
          </div>
        </div>
      </div>
      <div className="col-2 col-card">
        <div className="card card-border">
          <div className="card-body">
            <p className="card-day">Fri</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
            <p>25°</p>
          </div>
        </div>
      </div>
      <div className="col-2 col-card">
        <div className="card card-border">
          <div className="card-body">
            <p className="card-day">Sat</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
            <p>23°</p>
          </div>
        </div>
      </div>
    </div>
  );
}
