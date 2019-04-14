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
import './RevokeValidatorModal.css'

class RevokeValidatorModal extends Component {
  render () {
    const { hide, show, text } = this.props

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
          <p style={{ lineHeight: '34px' }}>VALIDATOR INFORMATION</p>
          <br />
          <Row>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <p className='text-uppercase'>NAME</p>
                {text}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <p className='text-uppercase'>EMAIL</p>
                {text}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <p className='text-uppercase'>COMPANY</p>
                {text}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <p className='text-uppercase'>VOTED ON</p>
                {text}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <p className='text-uppercase'>VALIDATOR SINCE</p>
                {text}
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Button
            variant='primary'
            type='submit'
            className='w-auto border-0 defaultButton defaultButtonRed d-block m-auto'
          >
            Revoke
          </Button>
        </Modal.Body>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(RevokeValidatorModal)
