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
import MyMap from '../../atoms/MyMap/MyMap'
import './RequestModal.css'

class RequestModal extends Component {
  renderByType = () => {
    const { type, location = {} } = this.props
    switch (type) {
      case 'new-location':
        return (
          <div className='modalRowData'>
            <MyMap
              defaultZoom={15}
              lat={location.lat}
              lng={location.lng}
              isMarkerShown
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyByaL2JekW-uKMcHKTGJGVB3V7Zd6NfAKg&libraries=geometry,drawing,places'
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <Row className='mt-3 mb-1'>
              <Col>
                <p>LOCATION</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DATE INITIATED</p>
                {type}
              </Col>

              <Col>
                <p>DUE DATE</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DEVICE INSTALED</p>
                {type}
              </Col>

              <Col>
                <p>&nbsp;</p>
                {type}
              </Col>
            </Row>
          </div>
        )
      case 'new-device':
        return (
          <div className='modalRowData'>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DEVICE</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DATE INITIATED</p>
                {type}
              </Col>

              <Col>
                <p>DUE DATE</p>
                {type}
              </Col>
            </Row>
            <hr />
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DEVICE MANUFACTURE</p>
                {type}
              </Col>

              <Col>
                <p>DEVICE TYPE</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
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
        )
      case 'new-validator':
        return (
          <div className='modalRowData'>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>NAME</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>EMAIL ADDRESS</p>
                {type}
              </Col>

              <Col>
                <p>COMPANY</p>
                {type}
              </Col>
            </Row>
            <hr />
            <Row className='mt-3 mb-1'>
              <Col>
                <p>REQUEST INITIATOR</p>
                {type}
              </Col>

              <Col>
                <p>DATE INITIATED</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DUE DATE</p>
                {type}
              </Col>
            </Row>
          </div>
        )
      case 'new-info-source':
        return (
          <div className='modalRowData'>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>SOURCE NAME</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>SOURCE WEB ADDRESS</p>
                {type}
              </Col>

              <Col>
                <p>REQUEST INITIATOR</p>
                {type}
              </Col>
            </Row>

            <Row className='mt-3 mb-1'>
              <Col>
                <p>DATE INITIATED</p>
                {type}
              </Col>
              <Col>
                <p>DUE DATE</p>
                {type}
              </Col>
            </Row>
          </div>
        )
      case 'risky-location':
        return (
          <div className='modalRowData'>
            <MyMap
              defaultZoom={15}
              lat={location.lat}
              lng={location.lng}
              isMarkerShown
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyByaL2JekW-uKMcHKTGJGVB3V7Zd6NfAKg&libraries=geometry,drawing,places'
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <Row className='mt-3 mb-1'>
              <Col>
                <p>LOCATION</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DATE INITIATED</p>
                {type}
              </Col>

              <Col>
                <p>DUE DATE</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DEVICE INSTALED</p>
                {type}
              </Col>

              <Col>
                <p>&nbsp;</p>
                {type}
              </Col>
            </Row>
            <hr />
          </div>
        )
      case 'revoke-validator':
        return (
          <div className='modalRowData'>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>NAME</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>EMAIL ADDRESS</p>
                {type}
              </Col>

              <Col>
                <p>COMPANY</p>
                {type}
              </Col>
            </Row>
            <Row>
              <Col>
                <p>VALIDATOR SINCE</p>
                {type}
              </Col>
              <Col>
                <p>NUMBER OF VOTES</p>
                {type}
              </Col>
            </Row>
            <hr />
            <Row className='mt-3 mb-1'>
              <Col>
                <p>REQUEST INITIATOR</p>
                {type}
              </Col>

              <Col>
                <p>DATE INITIATED</p>
                {type}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DUE DATE</p>
                {type}
              </Col>
            </Row>
          </div>
        )
      default:
        return null
    }
  }

  renderVoteResult = (image, text) => {
    return (
      <>
        <img alt='icon downvote' className='mr-2' src={image} height='15' />
        {text}
      </>
    )
  }

  render () {
    const {
      hide,
      show,
      TypeField,
      showStatus,
      upvoteCount,
      downvoteCount
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
        <Modal.Body>
          <Row className='mb-2'>
            <Col>
              <p style={{ lineHeight: '34px' }}>REQUEST</p>
            </Col>
            <Col>
              <div className='position-absolute' style={{ right: 16 }}>
                <TypeField />
              </div>
            </Col>
          </Row>
          {this.renderByType()}
          <br />
          {showStatus ? null : (
            <div className='m-auto d-table'>
              <Button
                variant='primary'
                type='submit'
                className='w-auto border-0 mr-2 defaultButton'
              >
                {this.renderVoteResult(
                  require('../../../../assets/images/upvote-white.png'),
                  `Upvote (${upvoteCount})`
                )}
              </Button>
              <Button
                variant='primary'
                type='submit'
                className='w-auto border-0 defaultButton defaultButtonRed'
              >
                {this.renderVoteResult(
                  require('../../../../assets/images/downvote-white.png'),
                  `Downvote (${downvoteCount})`
                )}
              </Button>
            </div>
          )}
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
)(RequestModal)
