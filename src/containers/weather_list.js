import React ,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

 class WeatherList extends Component{
  renderWeather(cityData){
    const temps=cityData.list.map(weather =>weather.main.temp);
    const pressure=cityData.list.map(weather =>weather.main.pressure);
    const humidities=cityData.list.map(weather =>weather.main.humidity);
    const {lon ,lat}=cityData.city.coord;

  return(
    <tr key={cityData.city.name}>
      <td><GoogleMap lon={lon} lat={lat}/></td>
      <td><Chart data={temps} color="orange" unites="K"/></td>
      <td><Chart data={pressure} color="green" unites="hpa"/></td>
      <td><Chart data={humidities} color="black" unites="%"/></td>
    </tr>
  );
}
  render(){
    return(
      <table className="table table-hover">
        <thead>
         <tr>
           <th>City</th>
           <th>Tempreture (K)</th>
           <th>Pressure (hpa)</th>
           <th>Humidity (%)</th>

         </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}
function mapStateToProps({weather}){
  console.log({weather});
  return {weather};
}
export default connect(mapStateToProps)(WeatherList);
