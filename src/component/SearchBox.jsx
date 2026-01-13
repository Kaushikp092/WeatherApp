import React, { useState } from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchBox = ({ updateInfo }) => {
   const [city, setCity] = useState("");
   const [error, setError] = useState(false);

   //api url from openweather api
   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   //personal api key from openweather api
   const API_KEY = "2c30bad4a3ae7696d62f0777d3d165bd";

   // using async await for calling api bcoz it may take time to fetch data
   const getWeatherInfo = async () => {
      try {
         //passing updateinfo as a prop from weather app to render input info
         const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
         ); //fetch data from url and restoring in response variable
         //&units=metric converts temperature in normal celsius

         const jsonResponse = await response.json();
         //converting data in json and restoring into jsonresponse variable

         //   retriving data from jsonresponse
         const result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
         };
         console.log(result);
         return result;
      } catch (err) {
         throw err;
      }
   };

   const handleChange = (e) => {
      setCity(e.target.value);
   };

   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         console.log(city);
         setCity(""); //after submitting info in input field it will clear and call get weatherinfo
         const newInfo = await getWeatherInfo();
         updateInfo(newInfo); //update new information through updateInfo function
      } catch (err) {
         setError(true);
      }
   };
   return (
      <div className="SearchBox">
         <form onSubmit={handleSubmit}>
            <TextField
               id="city"
               label="City Name"
               variant="outlined"
               required
               value={city}
               onChange={handleChange}
            />
            <br />
            <br />
            <Button variant="contained" type="submit">
               Submit
            </Button>
            {error && <p style={{ color: "red" }}>No such place in our API</p>}
         </form>
      </div>
   );
};

export default SearchBox;
