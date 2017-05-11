# react-china-location
React Component for [china-location](https://github.com/JasonBoy/data_location)

## Usage

`npm install china-location react-china-location --save` or
`yarn add china-location react-china-location`

```javascript
import locationData from 'china-location/dist/location.json';
import ChinaLocation from 'react-china-location';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.onLocationChange = this.onLocationChange.bind(this);

    this.state = {
      currentLocation: {},
    }
  }


  onLocationChange (newLocation) {
    //{
    //  province: {code: '110000', name: '北京市'},
    //  city: {code: '110000', name: '北京市'},
    //  district: {code: '110101', name: '东城区'}
    //}
    console.log(newLocation);
    this.setState({
      currentLocation: newLocation,
    });
  }

  render () {
    <div>
      <ChinaLocation list={locationData} onLocationChange={this.onLocationChange}/>
    </div>
  }
}
```

### Props

- list: location data from `china-location`
- onLocationChange: be notified when user select different option

## LICENSE

MIT
