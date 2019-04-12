import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './HomePage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'

class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    return (
      <>
        <RegularLayout>
          <Container>
            HOME PAGEdd
            <h1>h111</h1>
            <h2>h22h22h2</h2>
            <h3>h333</h3>
            <h4>h444</h4>
          </Container>
        </RegularLayout>
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
)(HomePage)
