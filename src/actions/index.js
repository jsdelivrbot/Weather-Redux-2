import axios from 'axios';

const API_KEY = '0547f7cf3264ad65fb0b9df34fdf9cb1';
const ROOT_URL =  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
   const url = `${ROOT_URL}&q=${city},us`;
   console.log(url);
   const request = axios.get(url);
   //will return a promise here
   console.log('Request:', request);
   return {
     type: 'FETCH_WEATHER',
     payload: request
   }
 }
