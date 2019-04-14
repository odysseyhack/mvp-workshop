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
import './LocationModal.css'

class RequestModal extends Component {
  render () {
    const {
      hide,
      show,
      TypeField,
      text,
      showStatus,
      upvoteCount,
      downvoteCount,
      location = {}
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
          <p style={{ lineHeight: '34px' }}>MANAGE LOCATION</p>
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
                {text}
              </Col>
            </Row>
            <Row className='mt-3 mb-1'>
              <Col>
                <p>DEVICES INSTALED (5)</p>
                {text}
              </Col>
            </Row>
            <br />
            {/* <hr /> */}
            <Button
              variant='primary'
              type='submit'
              className='w-auto border-0 defaultButton defaultButtonRed d-block m-auto'
            >
              Revoke
            </Button>
          </div>
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
