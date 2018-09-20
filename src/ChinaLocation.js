import React from 'react';
import PropTypes from 'prop-types';
import ChinaLocationList from 'china-location';

class ChinaLocation extends React.Component {
  constructor (props) {
    super(props);

    if(!props.list) {
      throw new Error('[ReactChinaLocation] location data "props.list" is required!');
    }

    this.location = new ChinaLocationList(props.list);

    this.handleProvinceChange = this.handleProvinceChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleDistrictChange = this.handleDistrictChange.bind(this);
    this.updateLocationState = this.updateLocationState.bind(this);

    this.state = {
      activeProvince: this.location.activeProvince,
      activeCity: this.location.activeCity,
      activeDistrict: this.location.activeDistrict,
      currentProvinces: this.location.getCurrentProvinces(),
      currentCities: this.location.getCurrentCities(),
      currentDistricts: this.location.getCurrentDistricts(),
    };

  }

  componentDidMount () {
    this.props.onLocationChange(this.location.getCurrentAddress());
  }

  handleProvinceChange (e) {
    const provinceCode = e.target.value;
    this.location.changeProvince(provinceCode);
    this.updateLocationState();
    this.props.onLocationChange(this.location.getCurrentAddress());
  }

  handleCityChange (e) {
    this.location.changeCity(e.target.value);
    this.setState({
      activeCity: this.location.activeCity,
      activeDistrict: this.location.activeDistrict,
      currentDistricts: this.location.getCurrentDistricts(),
    });
    this.props.onLocationChange(this.location.getCurrentAddress());
  }

  handleDistrictChange (e) {
    this.location.changeDistrict(e.target.value);
    this.setState({
      activeDistrict: this.location.activeDistrict,
    });
    this.props.onLocationChange(this.location.getCurrentAddress());
  }

  updateLocationState () {
    this.setState({
      activeProvince: this.location.activeProvince,
      activeCity: this.location.activeCity,
      activeDistrict: this.location.activeDistrict,
      currentProvinces: this.location.getCurrentProvinces(),
      currentCities: this.location.getCurrentCities(),
      currentDistricts: this.location.getCurrentDistricts(),
    });
  }

  render () {
    const className = this.props.className ? ' ' + this.props.className : '';
    return (
      <div className={"china-location-wrapper" + className}>
        <select value={this.state.activeProvince} onChange={this.handleProvinceChange}>
          {
            this.state.currentProvinces.map((ele) => {
              return <option key={ele.code} value={ele.code}>{ele.name}</option>;
            })
          }
        </select>
        <select value={this.state.activeCity} onChange={this.handleCityChange}>
          {
            this.state.currentCities.map((ele) => {
              return <option key={ele.code} value={ele.code}>{ele.name}</option>;
            })
          }
        </select>
        <select value={this.state.activeDistrict} onChange={this.handleDistrictChange}>
          {
            this.state.currentDistricts.map((ele) => {
              return <option key={ele.code} value={ele.code}>{ele.name}</option>;
            })
          }
        </select>
      </div>
    );
  }
}

ChinaLocation.propTypes = {
  onLocationChange: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default ChinaLocation;
