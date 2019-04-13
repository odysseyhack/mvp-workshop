import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CreateReactClass from 'create-react-class'
import Gauge from 'svg-gauge'

import './InstallationPage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import DashboardCard from '../../organisms/DashboardCard/DashboardCard'
import InstallationCard from '../../organisms/InstallationCard/InstallationCard'

class InstallationPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    return (
      <RegularLayout>
        <Row>
          <Col>
            <h2>My installations</h2>
          </Col>
          <Col>
            <Button
              variant='primary'
              type='submit'
              className='w-auto border-0 float-right defaultButton pl-4 pr-4'
            >
              + Add installation
            </Button>
          </Col>
        </Row>
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
        <InstallationCard
          image='https://images.vexels.com/media/users/3/145131/isolated/preview/d2ba09d9b4856df5b15cdc5636a45b37-sun-large-wavy-beams-icon-by-vexels.png'
          name='GreenBattery'
          battery='86'
          voltage='55.20'
          production='4,090'
          consumption='3,527'
          lastUpdate='5'
        />
        <InstallationCard
          image='https://images.vexels.com/media/users/3/145131/isolated/preview/d2ba09d9b4856df5b15cdc5636a45b37-sun-large-wavy-beams-icon-by-vexels.png'
          name='GreenBattery'
          battery='86'
          voltage='55.20'
          production='4,090'
          consumption='3,527'
          lastUpdate='5'
        />
        <InstallationCard
          image='https://images.vexels.com/media/users/3/145131/isolated/preview/d2ba09d9b4856df5b15cdc5636a45b37-sun-large-wavy-beams-icon-by-vexels.png'
          name='GreenBattery'
          battery='86'
          voltage='55.20'
          production='4,090'
          consumption='3,527'
          lastUpdate='5'
        />
        <InstallationCard
          image='https://images.vexels.com/media/users/3/145131/isolated/preview/d2ba09d9b4856df5b15cdc5636a45b37-sun-large-wavy-beams-icon-by-vexels.png'
          name='GreenBattery'
          battery='86'
          voltage='55.20'
          production='4,090'
          consumption='3,527'
          lastUpdate='5'
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
)(InstallationPage)
