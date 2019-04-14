import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './ValidatorCard.css'
import * as appActions from '../../../redux/actions'
import RequestModal from '../RequestModal/RequestModal'
import RevokeValidatorModal from '../RevokeValidatorModal/RevokeValidatorModal'

class ValidatorCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      show: false
    }
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render () {
    const { name, company, validatorSince, votedOn } = this.props
    const { show } = this.state

    return (
      <>
        <Card
          className='installationCard ValidatorCard mt-3 mb-3 pl-3 pr-3'
          onClick={() => {
            this.setState({ show: true })
          }}
        >
          <Row className='h-100'>
            <Col className='m-auto installationTitle' md='3'>
              {name}
            </Col>
            <Col className='m-auto p-0'>{company}</Col>
            <Col className='m-auto'>{validatorSince}</Col>
            <Col className='m-auto p-0' md='5' style={{ lineHeight: '40px' }}>
              {votedOn}
              <span
                className='mr-4 float-right manageInstallationButton'
                style={{ color: '#f96270' }}
              >
                Revoke
              </span>
            </Col>
          </Row>
        </Card>
        <RevokeValidatorModal
          show={show}
          hide={this.hideModal}
          {...this.props}
        />
      </>
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
)(ValidatorCard)
