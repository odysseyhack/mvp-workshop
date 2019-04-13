import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './DeviceCard.css'
import * as appActions from '../../../redux/actions'

class DeviceCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  tempPrefix = temp => {
    return temp > 0 ? '+' + temp : temp
  }

  renderDeviceType = () => {
    const { type } = this.props
    switch (type) {
      case 'solar-panel':
        return (
          <div>
            <img
              alt='installation type'
              src='https://images.vexels.com/media/users/3/145131/isolated/preview/d2ba09d9b4856df5b15cdc5636a45b37-sun-large-wavy-beams-icon-by-vexels.png'
              width='35'
              className='mr-2'
            />
            Solar panel
          </div>
        )
      case 'battery':
        return (
          <div>
            <img
              alt='installation type'
              src='https://images.vexels.com/media/users/3/145131/isolated/preview/d2ba09d9b4856df5b15cdc5636a45b37-sun-large-wavy-beams-icon-by-vexels.png'
              width='35'
              className='mr-2'
            />
            Battery
          </div>
        )
      default:
        break
    }
    return null
  }

  render () {
    const { model, brand, pmax, minTemp, maxTemp } = this.props
    const DeviceType = this.renderDeviceType
    return (
      <Card className='installationCard mt-3 mb-3 pl-3 pr-3'>
        <Row className='h-100'>
          <Col className='m-auto installationTitle' md='3'>
            {model}
            <br />
            <p>{brand}</p>
          </Col>
          <Col className='m-auto'>
            <DeviceType />
          </Col>
          <Col className='m-auto'>{pmax} W</Col>
          <Col className='m-auto'>
            {this.tempPrefix(minTemp)} °C ~ {this.tempPrefix(maxTemp)} °C
          </Col>
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
)(DeviceCard)
