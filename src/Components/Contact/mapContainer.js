import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
class mapContainer extends Component {
  render() {
    return (
      <div className='map' data-aos="fade-left" data-aos-duration="1000">
        <Map
          google={this.props.google}
          zoom={18}
          style={{ width: '100%', height: '100%' }}
          initialCenter={{ lat: 28.9890568, lng: 77.7272113 }}

        >
          <Marker position={{ lat: 28.9890568, lng: 77.7272113 }} />
        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBG2HDhNAGF-kUc3_XEb3XXLzHcn6cuXJg'
})(mapContainer);