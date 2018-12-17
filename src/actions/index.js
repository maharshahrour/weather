import axios from 'axios';
const API_KEY='3f0fd925bd565185ae4756843be0e2ab';
const Root_URL=`https://api.openweathermap.org/data/2.5/forecast`;

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather (city){
  const url=`${Root_URL}?q=${city}&appid=${API_KEY}`;
  const request=axios.get(url);
  return{
    type:FETCH_WEATHER,
    payload : request
  }
}
