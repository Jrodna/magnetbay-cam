import React from 'react';
import * as seedrandom from 'seedrandom';
import { styles } from './day-forcast.styles';

type dayForecastProps = {
  date: Date;
};

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const compassDirections = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

const dayForecast = (props: dayForecastProps) => {
  const day = props.date.getDay();
  const date = props.date.getDate();
  const month = props.date.getMonth();
  const random = seedrandom(`${date + month}`);
  const dayWaveHeight = Number((random() * 100) % 40).toPrecision(2);
  // 8 wind directions starting with North at 0 going clockwise
  const windDirection = Math.abs(random.int32()) % 8;
  return (
    <div key={day} style={styles.day}>
      <h2>
        <span>{daysOfWeek[day]}</span>
      </h2>
      <div style={styles.waveHeight}>{dayWaveHeight}m <sup>{compassDirections[windDirection]}</sup></div>

    </div>
  );
};

export default dayForecast;
// 
