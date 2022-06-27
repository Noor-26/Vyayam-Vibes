import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
class mapContainer extends Component {
render(){
    return (
        <Map
        google={this.props.google}
        zoom={18}
        style={{width: '500px',height: '300px'}}
        initialCenter={{ lat: 28.9890568, lng: 77.7272113}}
      
      >
        <Marker position={{ lat: 28.9890568, lng: 77.7272113}} />
      </Map>
    )
}
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBG2HDhNAGF-kUc3_XEb3XXLzHcn6cuXJg'
  })(mapContainer);