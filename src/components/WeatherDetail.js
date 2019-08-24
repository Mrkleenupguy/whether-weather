import React, { Component } from 'react';
import { AreaClosed } from '@vx/shape';
import { Group } from '@vx/group';
import { GradientOrangeRed } from '@vx/gradient';
import { appleStock } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';
import { extent, max } from 'd3-array';

const appleData = appleStock;
const width = 750;
const height = 400;
const margin = {
  top: 60,
  bottom: 60,
  left: 80,
  right: 80
};


class WeatherDetail extends Component {

  constructor() {
    super();
    this.showDayWeather = this.showDayWeather.bind(this);
  }

  showDayWeather(data) {
    return (
        data.map(hour => <li>{hour}</li>)
    )
  }

  render() {
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const x = d => new Date(d.date);
    const y = d => d.close;

    const xScale = scaleTime({
      range: [0, xMax],
      domain: extent(appleData, x)
    });
    
    const yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, max(appleData, y)]
    });
    return (
      <div className="weatherInfo">
        Weather Info for {this.props.day}

        <svg width={width} height={height}>
          <Group top={margin.top} left={margin.left}>
            <AreaClosed
              data={appleData}
              x={d => xScale(x(d))}
              y={d => yScale(y(d))}
              yScale={yScale}
              fill={"red"}
            />
          </Group>
        </svg>
      </div>
    );
  }
}

export default WeatherDetail;