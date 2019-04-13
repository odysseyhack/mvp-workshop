import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'

import './DashboardCard.css'
import * as appActions from '../../../redux/actions'

class DashboardCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    const {
      image,
      title,
      description,
      big,
      basic,
      children,
      noMargin
    } = this.props
    const className = classNames('dashboard-card', {
      'big-dashboard-card': big,
      'm-0': noMargin
    })
    return (
      <Card className={className}>
        {basic ? (
          children
        ) : (
          <>
            <img alt='MVP Workshop logo' src={image} width='50' />
            <h1>{title}</h1>
            <p>{description}</p>
          </>
        )}
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
)(DashboardCard)
