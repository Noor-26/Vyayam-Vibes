import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
class Contact extends Component {
render(){
    return (
        <Map
        google={this.props.google}
        zoom={10}
        style={{width: '100%',height: '100%'}}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      >
        <Marker position={{ lat: 28.984280, lng: 77.734910}} />
      </Map>
    )
}
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBG2HDhNAGF-kUc3_XEb3XXLzHcn6cuXJg'
  })(Contact);