import React, { Component } from 'react'
import { Route } from 'react-router'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../../../redux/actions'

import LoadingPage from '../../pages/LoadingPage/LoadingPage'
import axios from 'axios'
import determineUserRole from '../../../helpers/determine-user-role'

class AuthUserRoute extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + '/users/me')
      .then(response => {
        this.props.actions.userProfileSetUserId(response.data.data.id)
        const userRole = determineUserRole(response.data.data.roles)
        this.props.actions.userProfileSetUserRole(userRole)
        if (this.props.userRole.showDashboard === false) {
          this.props.history.push(this.props.userRole.redirectUrl)
        } else {
          // this.setState({ loading: false });
        }
      })
      .catch(error => {
        this.props.actions.userProfileSetUserId(null)
        if (!error.response.status) {
          // this.props.showErrorMessage('Network Error!')
          this.props.history.push('/login')
        } else if (error.response.status === 401) {
          this.props.actions.userProfileSetUserId(null)
          // this.props.showErrorMessage('Please login to continue.')
          this.props.history.push('/login')
        }
      })
  }

  render () {
    const { loading } = this.state
    const { component: Component, ...rest } = this.props
    return loading ? <LoadingPage /> : <Route {...rest} component={Component} />
  }
}

const mapStateToProps = state => ({
  user: state.user.profile,
  userRole: state.user.role
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthUserRoute)
)
