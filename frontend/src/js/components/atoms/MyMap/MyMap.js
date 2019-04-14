import React, { Component } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps'
import { geolocated } from 'react-geolocated'

class MyMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: {
        lat: 53.210462799999995,
        lng: 6.5373772
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
    console.log('this.props', this.props)
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
            {props.multiMarkers && (
              <>
                <span className='marker-green'>
                  <Marker
                    options={{
                      icon: require('../../../../assets/images/approved-location.png')
                    }}
                    position={{ lat: lat + 0.01, lng: lng + 0.02 }}
                    onClick={props.onToggleOpen}
                  >
                    <InfoWindow onCloseClick={props.onToggleOpen}>
                      <div>
                        <div>Deviced installed: 6</div>
                        <div>Sent to grid: 2,345 W</div>
                      </div>
                    </InfoWindow>
                  </Marker>
                </span>
                <span className='marker-red'>
                  <Marker
                    options={{
                      icon: require('../../../../assets/images/potential-fraud.png')
                    }}
                    position={{ lat: lat, lng: lng - 0.01 }}
                    onClick={props.onToggleOpen}
                  >
                    <InfoWindow onCloseClick={props.onToggleOpen}>
                      <div>
                        <div>Deviced installed: 3</div>
                        <div>Sent to grid: 1,349 W</div>
                      </div>
                    </InfoWindow>
                  </Marker>
                </span>
                <span className='marker-green'>
                  <Marker
                    options={{
                      icon: require('../../../../assets/images/approved-location.png')
                    }}
                    position={{ lat: lat + 0.013, lng: lng - 0.0135 }}
                    onClick={props.onToggleOpen}
                  >
                    <InfoWindow onCloseClick={props.onToggleOpen}>
                      <div>
                        <div>Deviced installed: 2</div>
                        <div>Sent to grid: 2,875 W</div>
                      </div>
                    </InfoWindow>
                  </Marker>
                </span>
                <span className='marker-yellow'>
                  <Marker
                    options={{
                      icon: require('../../../../assets/images/potential-location.png')
                    }}
                    position={{ lat: lat + 0.004, lng: lng + 0.004 }}
                    onClick={props.onToggleOpen}
                  >
                    <InfoWindow onCloseClick={props.onToggleOpen}>
                      <div>
                        <div>Potential green device</div>
                      </div>
                    </InfoWindow>
                  </Marker>
                </span>
              </>
            )}
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
