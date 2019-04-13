import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './ValidatorsPage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'

class ValidatorsPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    return <RegularLayout />
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
)(ValidatorsPage)
