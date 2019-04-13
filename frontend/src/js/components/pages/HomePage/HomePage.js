import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CreateReactClass from 'create-react-class'
import Gauge from 'svg-gauge'

import './HomePage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import DashboardCard from '../../organisms/DashboardCard/DashboardCard'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const defaultOptions = {
  animDuration: 1,
  showValue: true,
  max: 100,
  dialStartAngle: 180,
  dialEndAngle: 0,
  label: val => val + '%',
  color: val => '#F9D477'
}

const BateryDiagram = CreateReactClass({
  displayName: 'Gauge',
  componentDidMount () {
    this.renderGauge(this.props)
  },

  shouldComponentUpdate (nextProps, nextState) {
    const { props } = this
    if (props.value !== nextProps.value) {
      this.renderGauge(nextProps)
    }
    return false
  },

  render () {
    return <div className='gauge-container' ref={el => (this.gaugeEl = el)} />
  },

  renderGauge (props) {
    const gaugeOptions = Object.assign({}, defaultOptions, props)
    if (!this.gauge) {
      this.gauge = Gauge(this.gaugeEl, gaugeOptions)
    }
    this.gauge.setValueAnimated(props.value, gaugeOptions.animDuration)
  }
})

class HomePage extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  renderConsumptionChart = () => {
    return (
      <BarChart width={690} height={330} data={[]}>

        <CartesianGrid vertical={false} strokeDasharray='3 3' />

        <XAxis dataKey='name' stroke='#BFC5D2' />

        <YAxis
          yAxisId='left'
          orientation='left'
          stroke='#BFC5D2'
          unit={' kW'}
          width={100}
          tickMargin={15}
        />

        <Tooltip />

        <Legend align='right' verticalAlign='top' />
        <Bar yAxisId='left' dataKey='Produced' fill='#38BB8D' unit={' kW'} />
        <Bar yAxisId='left' dataKey='Spent' fill='#F9D477' unit={' kW'} />

        <Bar
          yAxisId='left'
          dataKey='Sent'
          unit={' kW'}
          name='Sent to system'
          fill='#8182C9'
        />

      </BarChart>
    )
  }

  renderLeftSide = () => {
    return (
      <Col md='4'>

        <DashboardCard
          image={require('../../../../assets/images/weather-sunny.png')}
          title='12°C'
          description='Groningen, NL'
        />

        <DashboardCard
          image={require('../../../../assets/images/icon-irradiance.png')}
          title={
            <span>
              667.0 W/m<sup>2</sup>
            </span>
          }
          description='Irradiance'
        />

        <DashboardCard basic>

          <Row>

            <Col>
              <p>55.16V</p>
            </Col>

            <Col className='text-right'>
              <p>6.70A</p>
            </Col>

          </Row>

          <BateryDiagram value={86} />

          <p className='text-center'>BATTERY LEVEL</p>

        </DashboardCard>

      </Col>
    )
  }

  renderRightSide = () => {
    const ConsumptionChart = this.renderConsumptionChart

    return (
      <Col md='8'>

        <DashboardCard basic big>
          <p className='mb-3'>MY ENERGY CONSUMPTION</p>

          <ConsumptionChart />

        </DashboardCard>

        <Row>

          <Col>
          
            <DashboardCard
              noMargin
              image={require('../../../../assets/images/icon-production.png')}
              title='4,090 W'
              description='Production'
            />

          </Col>

          <Col>
            <DashboardCard
              noMargin
              image={require('../../../../assets/images/icon-consumption.png')}
              title='3,527 W'
              description='Consumption'
            />
          </Col>

        </Row>
      </Col>
    )
  }

  render () {
    const LeftSide = this.renderLeftSide
    const RightSide= this.renderRightSide

    return (
      <RegularLayout>
        <h2>Overview</h2>
        <Row>

          <LeftSide />

          <RightSide />
          
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
)(HomePage)
