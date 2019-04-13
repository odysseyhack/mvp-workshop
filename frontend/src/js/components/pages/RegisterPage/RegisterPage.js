import React from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Autocomplete from 'react-google-autocomplete'
import { Link } from 'react-router-dom'
import SplitLayout from '../../layouts/SplitLayout/SplitLayout'

import './RegisterPage.css'
import * as appActions from '../../../redux/actions'
import ProgressSteps from '../../atoms/ProgressSteps/ProgressSteps'
import MyMap from '../../atoms/MyMap/MyMap'

class RegisterPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 1,
      loading: false,
      email: '',
      password: '',
      location: {},
      panelModel: '',
      panelSerialNumber: ''
    }
  }

  renderCredentialView = () => {
    return (
      <Form>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          onClick={this.goToNextStep}
          className='w-100 border-0 mt-2 defaultButton'
        >
          Sign up
        </Button>
        <p className='mt-3 text-center'>
          Already have an account? <Link to='/login'>Sign in</Link>
        </p>
      </Form>
    )
  }
  renderLocationView = () => {
    const { location } = this.state

    return (
      <Form>
        <Form.Group controlId='location'>
          <Form.Label>Your solar panel location</Form.Label>
          {/* <Form.Control
            type='text'
            placeholder='Enter your solar panel location'
            value={this.state.location}
            onChange={this.handleChange}
          /> */}

          <Autocomplete
            className='form-control'
            onPlaceSelected={place => {
              const lat = place.geometry.location.lat()
              const lng = place.geometry.location.lng()
              this.setState({
                location: {
                  lat,
                  lng,
                  formatted_address: place.formatted_address,
                  url: place.url
                }
              })
            }}
            types={[]}
          />
        </Form.Group>
        <MyMap
          defaultZoom={18}
          lat={location.lat}
          lng={location.lng}
          isMarkerShown
        />
        <Row className='mt-4'>
          <Col>
            <Button
              variant='outline-primary'
              type='submit'
              onClick={this.goToPrevStep}
              className='w-100 ghostButton defaultButton'
            >
              Previous
            </Button>
          </Col>
          <Col>
            <Button
              variant='primary'
              type='submit'
              onClick={this.goToNextStep}
              className='w-100 border-0 defaultButton'
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
  renderDevicePickerView = () => {
    return (
      <Form>
        <Form.Group controlId='panelModel'>
          <Form.Label>Your solar panel model</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your solar panel model'
            value={this.state.panelModel}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='panelSerialNumber'>
          <Form.Label>Your solar panel serial number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your solar panel serial number'
            value={this.state.panelSerialNumber}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Row className='mt-2'>
          <Col>
            <Button
              variant='outline-primary'
              type='submit'
              onClick={this.goToPrevStep}
              className='w-100 ghostButton defaultButton'
            >
              Previous
            </Button>
          </Col>
          <Col>
            <Button
              variant='primary'
              type='submit'
              onClick={this.submitData}
              className='w-100 border-0 defaultButton'
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  goToNextStep = e => {
    e.preventDefault()
    this.setState(prevState => ({ step: prevState.step + 1 }))
  }

  goToPrevStep = e => {
    e.preventDefault()
    this.setState(prevState => ({ step: prevState.step - 1 }))
  }

  submitData = e => {
    e.preventDefault()
    const { actions } = this.props
    const {
      email,
      password,
      location,
      panelModel,
      panelSerialNumber
    } = this.state
    const data = {
      email,
      password,
      location,
      panelModel,
      panelSerialNumber
    }
    actions.registerUser(data)
  }

  render () {
    const { step } = this.state
    const CredentialView = this.renderCredentialView
    const LocationView = this.renderLocationView
    const DevicePickerView = this.renderDevicePickerView

    return (
      <SplitLayout>
        <div
          className='vertical-center position-relative'
          style={{ display: 'grid' }}
        >
          <Card
            className='m-auto card-container border-0'
            style={{ position: 'initial' }}
          >
            <Link to='/' className='position-absolute' style={{ top: 20 }}>
              <div className='m-auto card-container'>
                <img
                  alt='MVP Workshop logo'
                  src={require('../../../../assets/images/mvp-logo.png')}
                  height='60'
                />
              </div>
            </Link>
            <h3 className='text-center'>Register</h3>
            {step === 1 && <CredentialView />}
            {step === 2 && <LocationView />}
            {step === 3 && <DevicePickerView />}
          </Card>
          <div
            className='position-absolute d-flex'
            style={{ bottom: 0, left: 0, right: 0 }}
          >
            <ProgressSteps stepCount={3} activeStep={step} />
          </div>
        </div>
      </SplitLayout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(RegisterPage)
