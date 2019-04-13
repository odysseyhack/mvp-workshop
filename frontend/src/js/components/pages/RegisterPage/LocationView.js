import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Autocomplete from 'react-google-autocomplete'

import MyMap from '../../atoms/MyMap/MyMap'

class LocationView extends React.Component {
  render () {
    console.log('this.props', this.props)
    const { location } = this.props.state
    return (
      <Form>
        <Form.Group controlId='location'>
          <Form.Label>Your solar panel location</Form.Label>
          <Autocomplete
            className='form-control'
            onPlaceSelected={place => {
              const lat = place.geometry.location.lat()
              const lng = place.geometry.location.lng()
              this.props.setLocation({
                lat,
                lng,
                formatted_address: place.formatted_address,
                url: place.url
              })
            }}
            types={[]}
          />
        </Form.Group>
        <MyMap
          defaultZoom={18}
          lat={location.lat}
          lng={location.lng}
          isMarkerShown
        />
        <Row className='mt-4'>
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
              onClick={this.props.goToNextStep}
              className='w-100 border-0 defaultButton'
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default LocationView