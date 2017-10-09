# react-china-location [![npm](https://img.shields.io/npm/v/react-china-location.svg)](https://www.npmjs.com/package/react-china-location)
React Component for [china-location](https://github.com/JasonBoy/china-location)

It uses the simple html select/option tag,
to use custom UI, install the `china-location` only and make your own UI component.

![demo](https://raw.githubusercontent.com/JasonBoy/react-china-location/master/demo/demo.png)

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

## Demo

Go to `demo/build` and open `index.html` in your browser.

## LICENSE

MIT
