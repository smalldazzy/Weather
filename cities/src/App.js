import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY='e0c9e1d19574294f950ce907b3114cef';

class App extends React.Component {

  state ={
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

gettingWeather= async(e) => {
  e.preventDefault();
  const city= e.target.elements.city.value;
  const api_url= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data= await api_url.json();
  const time = ms =>{
                var date = new Date(ms*1000);
                var hours = date.getHours();
                // Minutes part from the timestamp
                var minutes = "0" + date.getMinutes();
                // Seconds part from the timestamp
                var seconds = "0" + date.getSeconds();
                return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            }
            // var surise_date=time(sunrise);
            // var sunset_date = time(sunset);

  console.log(data);
  if(city){
  this.setState({
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
    sunrise: time(data.sys.sunrise),
    sunset: time(data.sys.sunset),
    error: ""
  });
}
}

  render(){
    return(
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
      );
  }
}
export default App;
