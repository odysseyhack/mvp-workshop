import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './DevicesPage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import DeviceCard from '../../organisms/DeviceCard/DeviceCard'
import AddDeviceModal from '../../organisms/AddDeviceModal/AddDeviceModal'
import RequestCard from '../../organisms/RequestCard/RequestCard'

class DevicesPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      show: false
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

  renderRequestDevices = () => {
    return (
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
    )
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render () {
    const { show } = this.state
    const DeviceCardRow = this.renderDeviceCardRow

    return (
      <RegularLayout>
        <Row>
          <Col>
            <h3>Requested devices (1,567)</h3>
          </Col>

          <Col>
            <Button
              variant='primary'
              type='submit'
              className='w-auto border-0 float-right defaultButton pl-4 pr-4'
              onClick={() => {
                this.setState({ show: true })
              }}
            >
              + Add new device
            </Button>
          </Col>
        </Row>

        {this.renderRequestDevices()}
        <RequestCard
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='new-device'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />

        <h3>Approved devices (1,567)</h3>

        <DeviceCardRow />

        <DeviceCard
          minTemp={-40}
          maxTemp={90}
          type='battery'
          model='LG390N2T-A5'
          brand='LG'
          pmax={390}
        />
        <DeviceCard
          minTemp={-40}
          maxTemp={90}
          type='solar-panel'
          model='LG390N2T-A5'
          brand='LG'
          pmax={390}
        />
        <AddDeviceModal show={show} hide={this.hideModal} />
      </RegularLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    deviceRequests: state.generalData.deviceRequests
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DevicesPage)
