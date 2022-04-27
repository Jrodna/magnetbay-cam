import React from "react";
import * as seedrandom from 'seedrandom';

type dayForecastProps = {
  date: Date
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dayForecast = (props: dayForecastProps) => {
  const day = props.date.getDay();
  const date = props.date.getDate();
  const month = props.date.getMonth();
  const random = seedrandom(`${date + month}`);
  const dayWaveHeight = Number((random() * 100) % 40).toPrecision(2);
  return <div key={day}>{daysOfWeek[day]} | {dayWaveHeight}m</div>
};

export default dayForecast;