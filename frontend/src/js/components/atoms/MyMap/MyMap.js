import React, { Component } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import { geolocated } from 'react-geolocated'

class MyMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: {
        lat: 53.2,
        lng: 6.5374235
      },
      oldCords: { lat: null, lng: null }
    }
  }
  static getDerivedStateFromProps (nextProps, prevState) {
    if (!prevState.oldCords.lat && nextProps.coords) {
      return {
        location: {
          lat: nextProps.coords.latitude,
          lng: nextProps.coords.longitude
        },
        oldCords: {
          lat: nextProps.coords.latitude,
          lng: nextProps.coords.longitude
        }
      }
    } else if (
      prevState.location.lat !== nextProps.lat ||
      prevState.location.lng !== nextProps.lng
    ) {
      return {
        location: {
          lat: nextProps.lat,
          lng: nextProps.lng
        }
      }
    }
    return null
  }
  render () {
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => {
        const { defaultZoom } = props
        const {
          location: { lat, lng }
        } = this.state
        const position = { lat, lng }
        return (
          <GoogleMap defaultZoom={defaultZoom} defaultCenter={position}>
            {props.isMarkerShown && <Marker position={position} />}
          </GoogleMap>
        )
      })
    )
    return <MyMapComponent {...this.props} />
  }
}

MyMap.defaultProps = {
  lat: 53.2,
  lng: 6.5374235,
  defaultZoom: 18,
  googleMapURL:
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyByaL2JekW-uKMcHKTGJGVB3V7Zd6NfAKg&libraries=geometry,drawing,places',
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(MyMap)
