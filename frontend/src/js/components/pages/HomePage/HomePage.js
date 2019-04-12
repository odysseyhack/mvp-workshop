import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './HomePage.css'
import TopMenu from '../../organisms/TopMenu/TopMenu'
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
        <TopMenu actions={appActions} />
        <RegularLayout>
          <Container style={{ color: '#fff' }}>HOME PAGE</Container>
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
