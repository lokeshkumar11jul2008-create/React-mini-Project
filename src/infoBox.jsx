import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';



export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
       const HOT_URL ="https://images.unsplash.com/photo-1614906525727-32c5ffd1b5ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
       const COLD_URL="https://images.unsplash.com/photo-1514632595-4944383f2737?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
       const RAIN_URL="https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <h2>Weather Info ={info.weather}</h2>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 
          ? RAIN_URL 
          : info.temp>15
          ?HOT_URL
          :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80 
          ? <ThunderstormIcon/>
          : info.temp>15
          ?<SunnyIcon/> 
          :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'  }}component="span">
         
        </Typography>
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity= {info.humidity}&deg;C</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>

        <p>
            The weather can be described as = 
            <i>{info.weather}</i> and feels like =
            {info.feelsLike}&deg;C</p>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}