import React from 'react'
import './SplitLayout.css'
import { Container, Row, Col } from 'react-bootstrap'

class SplitLayout extends React.Component {
  render () {
    return (
      <Container fluid className='splitLayoutContainer'>
        <Row>
          <Col>{this.props.children}</Col>
          <Col className='containerBackground minHeight'>
            &nbsp;
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SplitLayout
