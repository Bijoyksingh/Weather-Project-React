import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css"

export default function InfoBox({info}){

    const IMG_URL = "https://images.ctfassets.net/hrltx12pl8hq/6TIZLa1AKeBel0yVO7ReIn/1fc0e2fd9fcc6d66b3cc733aa2547e11/weather-images.jpg?fit=fill&w=1200&h=630";
    const HOT_URL = "https://images.unsplash.com/photo-1653105849455-0d229af4c57a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL ="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL ="https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className='infoBox'>
          <h2>Information box of weather</h2>
<div className='cardContainer'>
    

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80 ? RAIN_URL: info.temp>15 ? HOT_URL : COLD_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           City : {info.city} {info.humidity>80 ? <ThunderstormIcon/>: info.temp>15 ? <LightModeIcon/> : <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature : {info.temp}&deg;C</p>
            <p>Minimum : {info.tempMin}&deg;C</p>
            <p>Maximum : {info.tempMax}&deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>The weather is <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>
</div>
    )
}