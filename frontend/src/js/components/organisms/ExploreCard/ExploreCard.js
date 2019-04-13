import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'

import './ExploreCard.css'
import * as appActions from '../../../redux/actions'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import { geolocated } from 'react-geolocated'
import MyMap from '../../atoms/MyMap/MyMap'

class ExploreCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      location: {}
    }
  }

  render () {
    const { location } = this.state
    const {
      image,
      name,
      battery,
      voltage,
      production,
      consumption,
      lastUpdate
    } = this.props
    return (
      <Card className='exploreCard p-2'>
        <MyMap
          defaultZoom={15}
          lat={location.lat}
          lng={location.lng}
          isMarkerShown
          googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyByaL2JekW-uKMcHKTGJGVB3V7Zd6NfAKg&libraries=geometry,drawing,places'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Card>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreCard)
