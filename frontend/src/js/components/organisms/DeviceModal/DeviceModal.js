import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Button,
  FormGroup,
  FormControl,
  Modal,
  Col,
  Row
} from 'react-bootstrap'
import * as appActions from '../../../redux/actions'
import './DeviceModal.css'

class DeviceModal extends Component {
  tempPrefix = temp => {
    return temp > 0 ? '+' + temp : temp
  }

  removeDevice = e => {
    e.preventDefault()
    const { actions, userId, panelId } = this.props
    actions.removeDevice(userId, panelId)
  }

  render () {
    console.log('this.props', this.props)
    const {
      hide,
      show,
      type,
      pmax,
      brand,
      maxTemp,
      minTemp,
      model
    } = this.props
    return (
      <Modal show={show} onHide={hide}>
        <img
          onClick={hide}
          alt='icon downvote'
          className='m-auto position-absolute'
          style={{ top: -25, right: 0, cursor: 'pointer' }}
          src={require('../../../../assets/images/close.png')}
          height='18'
          width='18'
        />
        <img
          onClick={hide}
          alt='icon downvote'
          className='m-auto position-absolute'
          style={{ top: -25, right: 0, cursor: 'pointer' }}
          src={require('../../../../assets/images/close.png')}
          height='18'
          width='18'
        />
        <Modal.Body>
          <Row>
            <Col>
              <p style={{ lineHeight: '34px' }}>DEVICE INFORMATION</p>
            </Col>
          </Row>
          <br />
          <div className='modalRowData'>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DEVICE</p>
                {model}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DEVICE MANUFACTURER</p>
                {brand}
              </Col>

              <Col>
                <p>DEVICE TYPE</p>
                {type}
              </Col>
            </Row>
            <hr />
            <Row className='mt-3 mb-1'>
              <Col>
                <p>MAX POWER</p>
                {pmax}
              </Col>

              <Col>
                <p>OPERATING TEMPERATURE</p>
                {this.tempPrefix(minTemp)} °C ~ {this.tempPrefix(maxTemp)} °C
              </Col>
            </Row>
            {/* <Row className='mt-3 mb-1'>
              <Col>
                <p>DATE INITIATED</p>
                {type}
              </Col>
              <Col>
                <p>INITIATOR</p>
                {type}
              </Col>
            </Row> */}
          </div>

          <br />
          <Button
            variant='primary'
            type='submit'
            className='w-auto border-0 defaultButton defaultButtonRed d-block m-auto'
            onClick={this.removeDevice}
          >
            Remove from list
          </Button>
        </Modal.Body>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.user.userId
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceModal)
