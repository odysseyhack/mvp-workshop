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
import './RemoveInstallationModal.css'

class RemoveInstallationModal extends Component {
  render () {
    const { hide, show, type } = this.props
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
              <p style={{ lineHeight: '34px' }}>INSTALLATION DETAILS</p>
            </Col>
          </Row>
          <br />
          <div className='modalRowData'>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DEVICE</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>NAME</p>
                {type}
              </Col>

              <Col>
                <p>SERIAL NUMBER</p>
                {type}
              </Col>
            </Row>
            <hr />
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DEVICE TYPE</p>
                {type}
              </Col>

              <Col>
                <p>MAX POWER</p>
                {type}
              </Col>

              <Col>
                <p>OPERATING TEMPERATURE</p>
                {type}
              </Col>
            </Row>
          </div>

          <br />
          <Button
            variant='primary'
            type='submit'
            className='w-auto border-0 defaultButton defaultButtonRed d-block m-auto'
          >
            Remove installation
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
)(RemoveInstallationModal)
