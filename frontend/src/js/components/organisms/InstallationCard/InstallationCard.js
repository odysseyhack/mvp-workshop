import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './InstallationCard.css'
import * as appActions from '../../../redux/actions'
import RemoveInstallationModal from '../RemoveInstallationModal/RemoveInstallationModal'

class InstallationCard extends React.Component {
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
    const { show } = this.state
    const {
      type,
      name,
      battery,
      voltage,
      production,
      consumption,
      lastUpdate
    } = this.props

    return (
      <>
        <Card
          className='installationCard mt-3 mb-3 pl-3 pr-3'
          onClick={() => {
            this.setState({ show: true })
          }}
        >
          <Row className='h-100'>
            <Col className='m-auto installationTitle' md='3'>
              <img
                alt='installation type'
                src={
                  type === 'battery'
                    ? require('../../../../assets/images/battery.png')
                    : require('../../../../assets/images/solar-panel.png')
                }
                width='25'
                className='mr-2'
              />
              {name}
            </Col>

            <Col className='m-auto'>{battery}%</Col>

            <Col className='m-auto'>{voltage} V</Col>

            <Col className='m-auto'>{production} W</Col>

            <Col className='m-auto'>{consumption} W</Col>

            <Col className='m-auto'>{lastUpdate} min ago</Col>

            <Col className='m-auto manageInstallationButton'>Manage</Col>
          </Row>
        </Card>
        <RemoveInstallationModal show={show} hide={this.hideModal} />
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
)(InstallationCard)
