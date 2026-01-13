import "./WeatherInfo.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";

const infoBox = ({ info }) => {
   const IMG_URL =
      "https://plus.unsplash.com/premium_photo-1694177606226-8cda7c13fecd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";

   const HOT_URL =
      "https://images.unsplash.com/photo-1545955413-209e03defb1f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";

   const COLD_URL =
      "https://plus.unsplash.com/premium_photo-1726373103916-07fe969f2836?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";

   const RAIN_URL =
      "https://images.unsplash.com/photo-1753106714062-281c36df37bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW53ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
   return (
      <div className="infoBox">
         <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                  sx={{ height: 140 }}
                  image={
                     info.humidity > 80
                        ? RAIN_URL
                        : info.temp > 15
                        ? HOT_URL
                        : COLD_URL
                  }
                  title="green iguana"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     {info.city}
                     {info.humidity > 80 ? (
                        <ThunderstormIcon />
                     ) : info.temp > 15 ? (
                        <SunnyIcon />
                     ) : (
                        <AcUnitIcon />
                     )}
                  </Typography>
                  <Typography
                     variant="body2"
                     sx={{ color: "text.secondary" }}
                     component={"span"}
                  >
                     <div>Temperature = {info.temp}&deg;</div>
                     <div>Humidity = {info.humidity}</div>
                     <div>Max Temp = {info.tempMax}&deg;</div>
                     <div>Min Temp = {info.tempMin}&deg;</div>
                     <div>
                        The weather can be described as <b>{info.weather} </b> and feels like = {info.feelsLike}&deg;
                     </div>
                  </Typography>
               </CardContent>
            </Card>
         </div>
      </div>
   );
};

export default infoBox;
