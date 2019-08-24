import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import WeatherCard from './WeatherCard';

class WeatherApp extends Component {

  constructor() {
    super();

    this.state = {
      weeklyWeather: [
        {
          day: 'Wed',
          fullDay: 'Wednesday',
          hourly: [80, 85, 86, 90, 98, 99, 100, 101, 115]
        }, 
        {day: 'Thu', fullDay: 'Thursday'}, 
        {day: 'Fri', fullDay: 'Friday'}, 
        {day: 'Sat', fullDay: 'Saturday'}, 
        {day: 'Sun', fullDay: 'Sunday'}, 
        {day: 'Mon', fullDay: 'Monday'}, 
        { day: 'Tue', fullDay: 'Tuesday'}],
      selectedDay: ""
    }
  }

  render() {
    return (
      <div className="weatherWeek">
        {this.props.weeklyWeather.map( dayWeather =>
          <Link to={'/'+dayWeather.fullDay}>
            <WeatherCard 
              day={dayWeather.day}
              key={dayWeather.fullDay}
              handleCardClick={this.props.handleCardClick} />
          </Link>
        )}
      </div>
    );
  }
}

export default WeatherApp;
