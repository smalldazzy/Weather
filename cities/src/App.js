import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY='e0c9e1d19574294f950ce907b3114cef';

class App extends React.Component {

gettingWeather= async(e) => {
  e.preventDefault();
  const api_url= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
  const data= await api_url.json();
  console.log(data);
}

  render(){
    return(
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
      );
  }
}
export default App;
