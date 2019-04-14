import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import './LoginPage.css'
import * as appActions from '../../../redux/actions'
import SplitLayout from '../../layouts/SplitLayout/SplitLayout'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submitLogin = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.actions.loginUser(email, password)
  }

  renderLoginForm = () => {
    return (
      <Form onSubmit={this.submitLogin}>
        <Form.Group controlId='email'>
          <p className='text-uppercase'>Email address</p>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId='password'>
          <p className='text-uppercase'>Password</p>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type='submit' className='w-100 mt-2 defaultButton border-0'>
          Sign in
        </Button>
        <p className='mt-3 text-center'>
          Don't have an account? <Link to='/register'>Sign up</Link>
        </p>
      </Form>
    )
  }

  render () {
    return (
      <SplitLayout>
        <div className='vertical-center'>
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
            <h3>Sign in</h3>
            <p>Please enter your credentials to proceed.</p> <br />
            {this.renderLoginForm()}
          </Card>
        </div>
      </SplitLayout>
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
)(LoginPage)
