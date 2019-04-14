import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './InstallationPage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import InstallationCard from '../../organisms/InstallationCard/InstallationCard'
import AddInstallationModal from '../../organisms/AddInstallationModal/AddInstallationModal'

class InstallationPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      show: false
    }
  }

  componentDidMount () {
    const { actions, userId } = this.props
    actions.getUserHousehold(userId)
  }

  renderInstallationCardRow = () => {
    return (
      <Row className='mt-4 pl-3 pr-3'>
        <Col md='3'>
          <p className='installationSections' style={{ marginLeft: 43 }}>
            INSTALLATION NAME
          </p>
        </Col>
        <Col>
          <p className='installationSections'>BATTERY LEVEL</p>
        </Col>
        <Col>
          <p className='installationSections'>DC VOLTAGE</p>
        </Col>
        <Col>
          <p className='installationSections'>PRODUCTION</p>
        </Col>
        <Col>
          <p className='installationSections'>CONSUMPTION</p>
        </Col>
        <Col>
          <p className='installationSections'>LAST UPDATE</p>
        </Col>
        <Col />
      </Row>
    )
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render () {
    const { show } = this.state
    const InstallationCardRow = this.renderInstallationCardRow

    return (
      <RegularLayout>
        <Row>
          <Col>
            <h3>My installations</h3>
          </Col>
          <Col>
            <Button
              variant='primary'
              type='submit'
              className='w-auto border-0 float-right defaultButton pl-4 pr-4'
              onClick={() => {
                this.setState({ show: true })
              }}
            >
              + Add installation
            </Button>
          </Col>
        </Row>
        <InstallationCardRow />
        <InstallationCard
          type='battery'
          name='GreenBattery'
          battery='86'
          voltage='55.20'
          production='4,090'
          consumption='3,527'
          lastUpdate='5'
        />
        <AddInstallationModal show={show} hide={this.hideModal} />
      </RegularLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    installations: state.generalData.installations,
    userId: state.user.userId
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstallationPage)
