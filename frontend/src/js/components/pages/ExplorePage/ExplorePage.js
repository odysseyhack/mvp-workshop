import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './ExplorePage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import ExploreCard from '../../organisms/ExploreCard/ExploreCard'
import { Row, Col } from 'react-bootstrap'
import DashboardCard from '../../organisms/DashboardCard/DashboardCard'

class ExplorePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    return (
      <RegularLayout>
        <h3 className='mb-4'>Other Households</h3>
        <ExploreCard />
        <Row>
          <Col>
            <DashboardCard
              image={require('../../../../assets/images/icon-production-large-scale.png')}
              title={<span>1,234</span>}
              description='Producers in your area'
            />
          </Col>{' '}
          <Col>
            <DashboardCard
              image={require('../../../../assets/images/icon-consumption.png')}
              title={<span>2,123</span>}
              description='Grid consumers in your area'
            />
          </Col>{' '}
          <Col>
            <DashboardCard
              image={require('../../../../assets/images/icon-installation.png')}
              title={<span>6,235</span>}
              description='Installed devices in your area'
            />
          </Col>
        </Row>
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
)(ExplorePage)
