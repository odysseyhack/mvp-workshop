import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import SplitLayout from '../../layouts/SplitLayout/SplitLayout'

import './RegisterPage.css'
import * as appActions from '../../../redux/actions'
import ProgressSteps from '../../atoms/ProgressSteps/ProgressSteps'
import CredentialView from './CredentialView'
import LocationView from './LocationView'
import DevicePickerView from './DevicePickerView'

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

  setLocation = location => {
    this.setState({ location })
  }

  renderStepOne = () => {
    const { step } = this.state
    return step === 1 ? (
      <CredentialView
        state={this.state}
        goToNextStep={this.goToNextStep}
        handleChange={this.handleChange}
      />
    ) : null
  }
  renderStepTwo = () => {
    const { step } = this.state
    return step === 2 ? (
      <LocationView
        state={this.state}
        goToNextStep={this.goToNextStep}
        goToPrevStep={this.goToPrevStep}
        setLocation={this.setLocation}
        handleChange={this.handleChange}
      />
    ) : null
  }
  renderStepThree = () => {
    const { step } = this.state
    return step === 3 ? (
      <DevicePickerView
        state={this.state}
        goToPrevStep={this.goToPrevStep}
        setLocation={this.setLocation}
        handleChange={this.handleChange}
        submitData={this.submitData}
      />
    ) : null
  }

  render () {
    const { step } = this.state

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
            {this.renderStepOne()}
            {this.renderStepTwo()}
            {this.renderStepThree()}
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
