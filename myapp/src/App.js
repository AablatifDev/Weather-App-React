import React, { Component } from 'react';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "4b2bff400011df6e26897162736959a1";
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {

  state = {
    temprature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: '',
  }


  getWeather = async (e) => {
    e.preventDefault()
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;


    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
    const data = await api.json()


    if (city && country) {
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temprature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please Enter Data'
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className='form-container'>
          <Form getWeather={this.getWeather}></Form>
          <Weather
            temprature={this.state.temprature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}>
          </Weather>
        </div>
      </div >
    );
  }
}
export default App;
