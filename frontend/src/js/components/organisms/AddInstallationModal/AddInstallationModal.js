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
import './AddInstallationModal.css'

class AddInstallationModal extends Component {
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
          <Row>
            <Col>
              <p style={{ lineHeight: '34px' }}>ADD INSTALLATION</p>
            </Col>
          </Row>

          <p style={{ color: '#2E384D' }}>
            Enter a new installation to your list:
          </p>
          <br />
          <Row>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <p className='text-uppercase'>DEVICE</p>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <p className='text-uppercase'>SERIAL NUMBER</p>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <p className='text-uppercase'>NAME YOUR INSTALLATION</p>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row className='mt-3 mb-1'>
            <Col>
              <p>DEVICE TYPE</p>
              {text}
            </Col>

            <Col>
              <p>MAX POWER</p>
              {text}
            </Col>

            <Col>
              <p>OPERATING TEMPERATURE</p>
              {text}
            </Col>
          </Row>
          <Button
            variant='primary'
            type='submit'
            className='w-auto border-0 d-block m-auto defaultButton pl-4 pr-4'
          >
            + Suggest validator
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
)(AddInstallationModal)
