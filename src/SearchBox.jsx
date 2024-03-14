// import "./Searchbox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Alerts from "./Alert"

export default function SearchBox({updateInfo}) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "cbc30908ea7219610b80c73ad72f8d37";

  let getWeatherInfo = async () => {
    try{
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result
  }catch(err){
    throw err;
  }
  };

  let handlerChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async(event) => {
    try{
    event.preventDefault();
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }catch(err){
      setError(true);
    }
  };
  return (
    <div className="main">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="City"
          variant="filled"
          onChange={handlerChange}
          value={city}
          required
        />
        <br /> <br />
        <Button variant="contained" color="info" type="submit">
          Search
        </Button>
        {error && <span><Alerts/></span>}
      </form>
    </div>
  );
}
