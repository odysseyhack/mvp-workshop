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
import './AddValidatorModal.css'

class AddValidatorModal extends Component {
  render () {
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
              <p style={{ lineHeight: '34px' }}>ADD NEW VALIDATOR</p>
            </Col>
          </Row>

          <p style={{ color: '#2E384D' }}>Suggest a new validator:</p>
          <br />
          <Row>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <p className='text-uppercase'>NAME</p>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <p className='text-uppercase'>EMAIL</p>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <p className='text-uppercase'>COMPANY</p>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
            </Col>
            <Col />
          </Row>
          <br />
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
)(AddValidatorModal)
