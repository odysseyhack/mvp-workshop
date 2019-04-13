import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './LocationCard.css'
import * as appActions from '../../../redux/actions'

class LocationCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    const {
      title,
      location,
      devicesCount,
      producing,
      consuming,
      sendingToGrid
    } = this.props
    return (
      <Card className='installationCard mt-3 mb-3 pl-3 pr-3'>
        <Row className='h-100'>
          <Col className='m-auto installationTitle' md='3'>
            {title}
            <br />
            <p className='m-0'>{location}</p>
          </Col>
          <Col className='m-auto'>{devicesCount}</Col>
          <Col className='m-auto'>{producing} W</Col>
          <Col className='m-auto'>{consuming} W</Col>
          <Col className='m-auto'>{sendingToGrid} W</Col>
          <Col className='m-auto manageInstallationButton'>Manage</Col>
        </Row>
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
)(LocationCard)
