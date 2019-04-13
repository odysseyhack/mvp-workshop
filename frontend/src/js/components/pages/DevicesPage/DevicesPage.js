import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './DevicesPage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import DeviceCard from '../../organisms/DeviceCard/DeviceCard'

class DevicesPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  renderDeviceCardRow = () => {

    return (

      <Row className='mt-4 pl-3 pr-3'>

        <Col md='3'>
          <p className='installationSections'>MODEL</p>
        </Col>

        <Col>
          <p className='installationSections'>TYPE OF DEVICE</p>
        </Col>

        <Col>
          <p className='installationSections'>MAX POWER (PMAX)</p>
        </Col>

        <Col>
          <p className='installationSections'>OPERATING TEMPERATURE</p>
        </Col>
        
        <Col />
      </Row>
    )
  }

  render () {
    const DeviceCardRow = this.renderDeviceCardRow
    return (
      <RegularLayout>

        <Row>

          <Col>
            <h3>Devices</h3>
          </Col>

          <Col>
            <Button
              variant='primary'
              type='submit'
              className='w-auto border-0 float-right defaultButton pl-4 pr-4'
            >
              + Add new device
            </Button>
          </Col>

        </Row>

        <DeviceCardRow />

        <DeviceCard
          minTemp={-40}
          maxTemp={90}
          type='battery'
          model='LG390N2T-A5'
          brand='LG'
          pmax={390}
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
)(DevicesPage)
