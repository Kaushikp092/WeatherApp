import React, { useState } from 'react';
import "./SearchBox.css"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchBox = () => {
    const [city, setCity] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(city);
        setCity("");
        
    }
   return (
      <div className="SearchBox">
         <h3>Search for the Weather</h3>
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
         </form>
      </div>
   );
};

export default SearchBox;
