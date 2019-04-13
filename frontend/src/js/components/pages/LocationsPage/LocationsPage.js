import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './LocationsPage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import RequestCard from '../../organisms/RequestCard/RequestCard'
import LocationCard from '../../organisms/LocationCard/LocationCard'

class LocationsPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    return (
      <RegularLayout>
        <h3>Locations</h3>
        {/* <MyMap /> */}
        <h3>Requested locations</h3>
        <Row className='mt-4 pl-3 pr-3'>
          <Col md='3'>
            <p className='installationSections'>TITLE</p>
          </Col>
          <Col>
            <p className='installationSections'>ACTION TYPE</p>
          </Col>
          <Col>
            <p className='installationSections'>DATE INITIATED</p>
          </Col>
          <Col md='5' className='p-0'>
            <p className='installationSections'>DUE DATE</p>
          </Col>
        </Row>
        <RequestCard
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='new-location'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        <h3>Approved locations</h3>
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
      </RegularLayout>
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
)(LocationsPage)
