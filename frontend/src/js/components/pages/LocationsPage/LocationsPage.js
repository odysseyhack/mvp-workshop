import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './LocationsPage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import RequestCard from '../../organisms/RequestCard/RequestCard'
import LocationCard from '../../organisms/LocationCard/LocationCard'
import MyMap from '../../atoms/MyMap/MyMap'

class LocationsPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentDidMount = () => {
    const { actions } = this.props
    actions.getLocationsRequests()
  }

  renderLocationCardRow = () => {
    return (
      <Row className='mt-4 pl-3 pr-3'>
        <Col md='3'>
          <p className='installationSections'>TITLE</p>
        </Col>
        <Col>
          <p className='installationSections'>DEVICES</p>
        </Col>
        <Col>
          <p className='installationSections'>PRODUCING</p>
        </Col>
        <Col>
          <p className='installationSections'>CONSUMING</p>
        </Col>
        <Col>
          <p className='installationSections'>SENDING TO GRID</p>
        </Col>
        <Col />
      </Row>
    )
  }

  renderApprovedLocations = () => {
    const LocationCardRow = this.renderLocationCardRow
    return (
      <>
        <h3>Approved locations</h3>
        <LocationCardRow />
        <LocationCard
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          devicesCount={5}
          producing='4,000'
          consuming='2,000'
          sendingToGrid='2,000'
        />
      </>
    )
  }

  renderRequestLocations = () => {
    return (
      <Row className='mt-4 pl-3 pr-3'>
        <Col md='3'>
          <p className='installationSections'>TITLE</p>
        </Col>
        <Col className='p-0'>
          <p className='installationSections'>ACTION TYPE</p>
        </Col>
        <Col>
          <p className='installationSections'>DATE INITIATED</p>
        </Col>
        <Col md='5' className='p-0'>
          <p className='installationSections'>DUE DATE</p>
        </Col>
      </Row>
    )
  }

  render () {
    const { locationRequests } = this.props

    return (
      <RegularLayout>
        <h3>Locations</h3>
        <MyMap multiMarkers defaultZoom={14} />
        <br />
        <h3>Requested locations</h3>
        {this.renderRequestLocations()}
        <RequestCard
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='new-location'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        {this.renderApprovedLocations()}
      </RegularLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    locationRequests: state.generalData.locationRequests
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsPage)
