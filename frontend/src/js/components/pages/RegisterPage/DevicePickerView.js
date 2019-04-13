import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

class DevicePickerView extends React.Component {
  renderButtonsForPicker = () => {
    return (
      <Row className='mt-2'>
        <Col>
          <Button
            variant='outline-primary'
            type='submit'
            onClick={this.props.goToPrevStep}
            className='w-100 ghostButton defaultButton'
          >
            Previous
          </Button>
        </Col>
        <Col>
          <Button
            variant='primary'
            type='submit'
            onClick={this.props.submitData}
            className='w-100 border-0 defaultButton'
          >
            Submit
          </Button>
        </Col>
      </Row>
    )
  }
  render () {
    return (
      <Form>

        <Form.Group controlId='panelModel'>
          <Form.Label>Your solar panel model</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your solar panel model'
            value={this.props.state.panelModel}
            onChange={this.props.handleChange}
          />
        </Form.Group>

        <Form.Group controlId='panelSerialNumber'>
          <Form.Label>Your solar panel serial number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your solar panel serial number'
            value={this.props.state.panelSerialNumber}
            onChange={this.props.handleChange}
          />
        </Form.Group>

        {this.renderButtonsForPicker()}
        
      </Form>
    )
  }
}

export default DevicePickerView
