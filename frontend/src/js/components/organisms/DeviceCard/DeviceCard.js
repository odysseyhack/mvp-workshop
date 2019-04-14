import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './DeviceCard.css'
import * as appActions from '../../../redux/actions'
import DeviceModal from '../DeviceModal/DeviceModal'

class DeviceCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      show: false
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
              src={require('../../../../assets/images/solar-panel.png')}
              width='25'
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
              src={require('../../../../assets/images/battery.png')}
              width='25'
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

  hideModal = () => {
    this.setState({ show: false })
  }

  render () {
    const { show } = this.state
    const { model, brand, pmax, minTemp, maxTemp } = this.props
    const DeviceType = this.renderDeviceType

    return (
      <>
        <Card
          className='installationCard mt-3 mb-3 pl-3 pr-3'
          onClick={() => {
            this.setState({ show: true })
          }}
        >
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

            <Col className='m-auto manageInstallationButton float-right text-right'>Manage</Col>
          </Row>
        </Card>
        <DeviceModal show={show} hide={this.hideModal} />
      </>
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
