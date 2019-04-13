import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './ExplorePage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import ExploreCard from '../../organisms/ExploreCard/ExploreCard'

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
