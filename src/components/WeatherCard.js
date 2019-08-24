import React, { Component } from 'react';

class WeatherCard extends Component {

  constructor(props) {
    super();
  }

  handleClick() {
    //console.log(this.props.weatherDescription);
    //return this.props.weatherDescription;
  }

  render() {
    // I could turn these into buttons, but I'm also wrapping them with a Link, which means
    // I'd be wrapping a 'button' element with an 'a' element, so I don't knooooooow
    return (
      <div className="weatherCard" onClick={(e) => this.props.handleCardClick(e, this.props.day)}>
        <div>
          <span>{this.props.day}</span>
        </div>
        <img src="./partly_cloudy.png" alt="partly cloudy"></img>
        <div className="temps">
          <div className="highTemp">100°</div>
          <div className="lowTemp">| 80°</div>
        </div>
      </div>
    );
  }
}
export default WeatherCard;