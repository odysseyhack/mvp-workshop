import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CredentialView extends React.Component {
  render () {
    return (
      <Form>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={this.props.state.email}
            onChange={this.props.handleChange}
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
            value={this.props.state.password}
            onChange={this.props.handleChange}
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          onClick={this.props.goToNextStep}
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
}

export default CredentialView
