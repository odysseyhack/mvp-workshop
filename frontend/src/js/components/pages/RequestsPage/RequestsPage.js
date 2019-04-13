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
  render () {
    return (
      <RegularLayout>
        <h3>Requests</h3>
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
          <Col md='5'>
            <p className='installationSections p-0'>DUE DATE</p>
          </Col>
        </Row>
        <RequestCard
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='new-location'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        <RequestCard
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='new-device'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        <RequestCard
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='risky-location'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        <RequestCard
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='new-validator'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        <RequestCard
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='revoke-validator'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        <RequestCard
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='new-info-source'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        <br />
        <h3>See resolved</h3>
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
          <Col md='2' className='p-0'>
            <p className='installationSections'>DUE DATE</p>
          </Col>
          <Col md='3' className='p-0'>
            <p className='installationSections'>STATUS</p>
          </Col>
        </Row>
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
        <RequestCard
          showStatus
          status
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='new-device'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        <RequestCard
          showStatus
          status
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='risky-location'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        <RequestCard
          showStatus
          status={false}
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='new-validator'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        <RequestCard
          showStatus
          status
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='revoke-validator'
          initiatedDate='MAR 11, 2019'
          dueDate='10 minutes'
        />
        <RequestCard
          showStatus
          status
          downvoteCount={2}
          upvoteCount={1}
          title='Groningen'
          location='Theatre Discrict 123'
          type='new-info-source'
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
