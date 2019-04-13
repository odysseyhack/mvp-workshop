import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'

import './InstallationCard.css'
import * as appActions from '../../../redux/actions'

class InstallationCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    const {
      image,
      name,
      battery,
      voltage,
      production,
      consumption,
      lastUpdate
    } = this.props
    // const className = classNames('dashboard-card', {
    //   'big-dashboard-card': big,
    //   'm-0': noMargin
    // })
    return (
      <Card className='installationCard mt-3 mb-3 pl-3 pr-3'>
        <Row className='h-100'>
          <Col className='m-auto installationTitle' md='3'>
            <img
              alt='installation type'
              src={image}
              width='35'
              className='mr-2'
            />
            {name}
          </Col>
          <Col className='m-auto'>{battery}%</Col>
          <Col className='m-auto'>{voltage} V</Col>
          <Col className='m-auto'>{production} W</Col>
          <Col className='m-auto'>{consumption} W</Col>
          <Col className='m-auto'>{lastUpdate} min ago</Col>
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
)(InstallationCard)
