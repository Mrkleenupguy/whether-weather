import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import WeatherApp from './components/WeatherApp';
import WeatherDetail from './components/WeatherDetail';


class App extends Component {

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
        {day: 'Tue', fullDay: 'Tuesday'}],
      selectedDay: ''
    }
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(e, day) {
    console.log('card click handled ' + day);
    let newSelectedDay = this.state.weeklyWeather.find( d => d.day === day);
    this.setState({ selectedDay: newSelectedDay });
  }

  render() {
    return (
      <Router>
        <div className="weatherApp">
          <div className="weatherAppTitle">
            <Link to="/"><h2>Wheather Weather Bar</h2></Link>
          </div>
          <h1>Wheather Weather App</h1>
          <Route path="/" render={(props) => <WeatherApp weeklyWeather={this.state.weeklyWeather} handleCardClick={this.handleCardClick}/>} />
          {this.state.selectedDay && 
            <Route path={'/' + this.state.selectedDay.fullDay} render={props => <WeatherDetail day={this.state.selectedDay.day} data={this.state.selectedDay.hourly} />} />
          }
        </div>
      </Router>
    );
  }
}

export default App;
