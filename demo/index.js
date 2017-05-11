import React from 'react';
import ReactDOM from 'react-dom';
import ChinaLocation from '../dist/react-china-location';
import locationData from 'china-location/dist/location.json';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.onLocationChange = this.onLocationChange.bind(this);

    this.state = {
      currentLocation: {},
      formattedLocation: '',
    }
  }

  onLocationChange (newLocation) {
    console.log(newLocation);
    this.setState({
      currentLocation: newLocation,
      formattedLocation: `${newLocation.province.name} ${newLocation.city.name} ${newLocation.district.name}`,
    });
  }

  render () {
    return (
      <div>
        <ChinaLocation list={locationData} onLocationChange={this.onLocationChange}/>
        <p>
          Current Location: {this.state.formattedLocation}
        </p>
      </div>
    )
  }

}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);