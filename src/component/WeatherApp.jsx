import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './WeatherInfo'

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
      city: "Navi-Mumbai",
      feelsLike: 30.87,
      humidity: 40,
      temp: 14.97,
      tempMax: 30.97,
      tempMin: 29.93,
      weather: "smoke",
   });

   const updateInfo = (newInfo) =>{ 
    setWeatherInfo(newInfo);
   }

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
