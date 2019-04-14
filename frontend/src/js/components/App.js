import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as appActions from '../redux/actions'
import GuestUserRoute from './atoms/GuestUserRoute/GuestUserRoute'
import AuthUserRoute from './atoms/AuthUserRoute/AuthUserRoute'

import LoadingPage from './pages/LoadingPage/LoadingPage'
import HomePage from './pages/HomePage/HomePage'
import InstallationPage from './pages/InstallationPage/InstallationPage'

import RequestsPage from './pages/RequestsPage/RequestsPage'
import DevicesPage from './pages/DevicesPage/DevicesPage'
import LocationsPage from './pages/LocationsPage/LocationsPage'
import ValidatorsPage from './pages/ValidatorsPage/ValidatorsPage'

import ExplorePage from './pages/ExplorePage/ExplorePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
// import DashboardPage from './pages/DashboardPage/DashboardPage'
import SomethingWentWrong from './pages/SomethingWentWrongPage/SomethingWentWrongPage'
import apiUtils from '../utils/api-utils'

apiUtils.initInterceptors()
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    document.title = process.env.REACT_APP_COMPANY_NAME

    this.setState({ loading: false })
  }

  render () {
    const { loading } = this.state
    if (loading) return <LoadingPage />
    return (
      <Switch>
        <GuestUserRoute exact path='/' component={HomePage} />
        <GuestUserRoute exact path='/login' component={LoginPage} />
        <GuestUserRoute exact path='/register' component={RegisterPage} />

        <AuthUserRoute exact path='/overview' component={HomePage} />
        <AuthUserRoute
          exact
          path='/installations'
          component={InstallationPage}
        />
        <AuthUserRoute exact path='/explore' component={ExplorePage} />

        <AuthUserRoute exact path='/requests' component={RequestsPage} />
        <AuthUserRoute exact path='/devices' component={DevicesPage} />
        <AuthUserRoute exact path='/locations' component={LocationsPage} />
        <AuthUserRoute exact path='/validators' component={ValidatorsPage} />

        {/* <GuestUserRoute exact path='/home' component={DashboardPage} /> */}

        {/* <AuthUserRoute exact path='/profile' component={ProfilePage} /> */}
        <Route component={SomethingWentWrong} />
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.profile
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
