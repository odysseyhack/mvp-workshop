import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './RequestCard.css'
import * as appActions from '../../../redux/actions'

class RequestCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  renderType = () => {
    const { type } = this.props
    switch (type) {
      case 'new-location':
        return <div className='requestType goodRequest'>NEW LOCATION</div>
      case 'new-device':
        return <div className='requestType goodRequest'>NEW DEVICE</div>
      case 'new-validator':
        return <div className='requestType goodRequest'>NEW VALIDATOR</div>
      case 'new-info-source':
        return <div className='requestType goodRequest'>NEW DEVICE</div>
      case 'risky-location':
        return <div className='requestType badRequest'>RISKY LOCATION</div>
      case 'revoke-validator':
        return <div className='requestType badRequest'>REVOKE VALIDATOR</div>

      default:
        return null
    }
  }

  renderStatusText = () => {
    const { status } = this.props
    if (status) {
      return <span className='requestStatusTrue'>Validated</span>
    }
    return <span className='requestStatusFalse'>No consensus met</span>
  }

  render () {
    const {
      title,
      location,
      initiatedDate,
      dueDate,
      upvoteCount,
      downvoteCount,
      showStatus    } = this.props
    // const className = classNames('dashboard-card', {
    //   'big-dashboard-card': big,
    //   'm-0': noMargin
    // })
    const TypeField = this.renderType
    const StatusText = this.renderStatusText
    return (
      <Card className='installationCard requestCard mt-3 mb-3 pl-3 pr-3'>
        <Row className='h-100'>
          <Col className='m-auto installationTitle' md='3'>
            {title}
            <br />
            <p className='m-0'>{location}</p>
          </Col>
          <Col className='m-auto p-0'>
            <TypeField />
          </Col>
          <Col className='m-auto'>{initiatedDate}</Col>
          {showStatus ? (
            <>
              <Col className='m-auto p-0' md='2'>
                {dueDate}
              </Col>
              <Col className='m-auto p-0' md='3'>
                <div className='d-inline-block'>
                  <StatusText />
                  <div className='d-inline-block rigthVotes'>
                    <div className='d-inline-block mr-4'>
                      <img
                        alt='icon upvote'
                        className='mr-2'
                        src={require('../../../../assets/images/upvote-gray.png')}
                        height='15'
                      />
                      {upvoteCount}
                    </div>
                    <div className='d-inline-block'>
                      <img
                        alt='icon downvote'
                        className='mr-2'
                        src={require('../../../../assets/images/downvote-gray.png')}
                        height='15'
                      />
                      {downvoteCount}
                    </div>
                  </div>
                  <img
                    alt='icon right'
                    className='rigthIconCardStatus'
                    src={require('../../../../assets/images/right.png')}
                    height='12'
                  />
                </div>
              </Col>
            </>
          ) : (
            <Col className='m-auto p-0' md='5'>
              {dueDate}
              <div
                className='d-inline-block float-right'
                style={{ marginRight: 40 }}
              >
                <Button
                  variant='primary'
                  type='submit'
                  className='w-auto border-0 mr-2 defaultButton'
                >
                  <img
                    alt='icon upvote'
                    className='mr-2'
                    src={require('../../../../assets/images/upvote-white.png')}
                    height='15'
                  />
                  Upvote ({upvoteCount})
                </Button>

                <Button
                  variant='primary'
                  type='submit'
                  className='w-auto border-0 defaultButton defaultButtonRed'
                >
                  <img
                    alt='icon downvote'
                    className='mr-2'
                    src={require('../../../../assets/images/downvote-white.png')}
                    height='15'
                  />
                  Downvote ({downvoteCount})
                </Button>
                <img
                  alt='icon right'
                  className='rigthIconCard'
                  src={require('../../../../assets/images/right.png')}
                  height='12'
                />
              </div>
            </Col>
          )}
        </Row>
      </Card>
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
)(RequestCard)
