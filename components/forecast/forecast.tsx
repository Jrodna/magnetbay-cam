import React from "react";
import DayForecast from "./day-forecast";
import {styles} from './forecast.styles';

type forecastProps = {};

const forecast = (props: forecastProps) => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  
  let days = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(now.getTime());
    day.setDate(now.getDate() + i);
    days.push(<DayForecast date={day} key={day.getDate()}/>)
  }
  return <div style={styles.wrapper}>{days}</div>
};

export default forecast;