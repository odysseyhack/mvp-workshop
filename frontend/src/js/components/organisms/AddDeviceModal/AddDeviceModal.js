import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import {
  Button,
  FormGroup,
  FormControl,
  Modal,
  Col,
  Row,
  Form,
  Card
} from 'react-bootstrap'
import * as appActions from '../../../redux/actions'
import './AddDeviceModal.css'

class AddDeviceModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      deviceType: 'solar',
      producer: '',
      modelNumber: '',
      maxOutputPowerWats: '',
      maxOperatingTemperature: '',
      minOperatingTemperature: ''
    }
  }

  submitForm = e => {
    e.preventDefault()
    console.log('this.state', this.state)
    const { actions, userId, hide } = this.props
    actions.addPanel(userId, this.state)
    hide()
    alert("Successfully added")
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  renderDeviceTypeCard = device => {
    const { deviceType } = this.state
    if (device === 'battery') {
      if (deviceType === device) {
        return (
          <Card className='p-4 text-center' style={{ borderColor: '#38BB8D' }}>
            <img
              alt='icon downvote'
              className='m-auto position-absolute'
              style={{ top: -9, right: -9 }}
              src={require('../../../../assets/images/checked-icon.png')}
              height='18'
              width='18'
            />
            <img
              alt='icon downvote'
              className='m-auto'
              src={require('../../../../assets/images/adding-battery-active.png')}
              height='50'
              width='50'
            />
            <span className='deviceTypePickerText'>Battery</span>
          </Card>
        )
      }
      return (
        <Card className='p-4 text-center'>
          <img
            alt='icon downvote'
            className='m-auto'
            src={require('../../../../assets/images/adding-battery-inactive.png')}
            height='50'
            width='50'
          />
          <span className='deviceTypePickerText'>Battery</span>
        </Card>
      )
    }
    if (device === 'solar') {
      if (deviceType === device) {
        return (
          <Card className='p-4 text-center' style={{ borderColor: '#38BB8D' }}>
            <img
              alt='icon downvote'
              className='m-auto position-absolute'
              style={{ top: -9, right: -9 }}
              src={require('../../../../assets/images/checked-icon.png')}
              height='18'
              width='18'
            />
            <img
              alt='icon downvote'
              className='m-auto'
              src={require('../../../../assets/images/adding-solar-active.png')}
              width='50'
              height='50'
            />
            <span className='deviceTypePickerText'>Solar panel</span>
          </Card>
        )
      }
      return (
        <Card className='p-4 text-center'>
          <img
            alt='icon downvote'
            className='m-auto'
            src={require('../../../../assets/images/adding-solar-inactive.png')}
            width='50'
            height='50'
          />
          <span className='deviceTypePickerText'>Solar panel</span>
        </Card>
      )
    }
  }

  render () {
    const { deviceType } = this.state
    const { hide, show } = this.props

    return (
      <Modal show={show} onHide={hide} className='modalRowData'>
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
              <p style={{ lineHeight: '34px' }}>ADD NEW DEVICE</p>
            </Col>
          </Row>

          <p style={{ color: '#2E384D', fontWeight: 400, fontSize: 15 }}>
            Suggest a new device to the system:
          </p>
          <br />
          <div
            onClick={() => {
              this.setState({ deviceType: 'battery' })
            }}
            className='d-inline-block mr-3'
            style={{ width: 150, height: 150 }}
          >
            {this.renderDeviceTypeCard('battery')}
          </div>
          <div
            onClick={() => {
              this.setState({ deviceType: 'solar' })
            }}
            className='d-inline-block'
            style={{ width: 150, height: 150 }}
          >
            {this.renderDeviceTypeCard('solar')}
          </div>
          <br />

          <Form onSubmit={this.submitForm}>
            <Row>
              <Col>
                <Form.Group controlId='modelNumber'>
                  <p className='text-uppercase'>MODEL</p>
                  <Form.Control
                    onChange={this.handleChange}
                    type='text'
                    placeholder='Enter model number'
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='producer'>
                  <p className='text-uppercase'>MANUFACTURER</p>
                  <Form.Control
                    onChange={this.handleChange}
                    type='text'
                    placeholder='Enter producer'
                  />
                </Form.Group>
              </Col>
            </Row>

            {deviceType === 'battery' ? (
              <>
                <Row>
                  <Col>
                    <Form.Group controlId='maxOutputPowerWats'>
                      <p className='text-uppercase'>MAX POWER (KW/H)</p>
                      <Form.Control
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Enter max output power wats'
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId='maxOperatingTemperature'>
                      <p className='text-uppercase'>MASS (KG)</p>
                      <Form.Control
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Enter max operating temperature'
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId='formBasicEmail'>
                      <p className='text-uppercase'>ACID VOLUME (L)</p>
                      <Form.Control
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Enter email'
                      />
                    </Form.Group>
                  </Col>
                  <Col />
                </Row>
              </>
            ) : (
              <>
                <Row>
                  <Col>
                    <Form.Group controlId='maxOutputPowerWats'>
                      <p className='text-uppercase'>MAX OUTPUT POWER (W)</p>
                      <Form.Control
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Enter max output power wats'
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId='maxOperatingTemperature'>
                      <p className='text-uppercase'>
                        MAX OPERATING TEMERATURE (°C)
                      </p>
                      <Form.Control
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Enter max operating temperature'
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId='minOperatingTemperature'>
                      <p className='text-uppercase'>
                        MIN OPERATING TEMERATURE (°C)
                      </p>
                      <Form.Control
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Enter min operating temperature'
                      />
                    </Form.Group>
                  </Col>
                  <Col />
                </Row>
              </>
            )}
            <br />
            <Button
              variant='primary'
              type='submit'
              className='w-auto border-0 d-block m-auto defaultButton pl-4 pr-4'
            >
              + Add new device
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.userId
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeviceModal)
