import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './RequestsPage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import RequestCard from '../../organisms/RequestCard/RequestCard'

class RequestsPage extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  renderRequestCardRow = resolved => {

    return (

      <Row className='mt-4 pl-3 pr-3'>

        <Col md='3'>
          <p className='installationSections'>TITLE</p>
        </Col>

        <Col className='p-0'>
          <p className='installationSections'>ACTION TYPE</p>
        </Col>

        <Col>
          <p className='installationSections'>DATE INITIATED</p>
        </Col>

        {resolved ? (
          <>
            <Col md='2' className='p-0'>
              <p className='installationSections'>DUE DATE</p>
            </Col>
            <Col md='3' className='p-0'>
              <p className='installationSections'>STATUS</p>
            </Col>
          </>
        ) : (
          <Col md='5' className='p-0'>
            <p className='installationSections'>DUE DATE</p>
          </Col>
        )}

      </Row>
    )
  }

  render () {

    return (

      <RegularLayout>

        <h3>Requests</h3>

        {this.renderRequestCardRow(false)}

        <RequestCard
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='revoke-validator'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />

        <br />

        <h3>See resolved</h3>

        {this.renderRequestCardRow(true)}

        <RequestCard
          showStatus
          status
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='new-location'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        
      </RegularLayout>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestsPage)
