import React, { Component } from 'react'
import { connect } from 'react-redux'
import './TopMenu.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as appActions from '../../../redux/actions'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'

class TopMenu extends Component {
  getClassNames = currentPath => {
    const { pathname } = this.props.location
    const className = classNames('nav-link', {
      'active-nav-link': pathname === currentPath
    })
    return className
  }

  render () {
    return (
      <Navbar className='topMenu' expand='lg' variant='light' sticky='top'>
        <Container>
          <Link to='/'>
            <Navbar.Brand>
              <img
                alt='MVP Workshop logo'
                src={require('../../../../assets/images/mvp-logo.png')}
                width='150'
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav>
              <Link className={this.getClassNames('/login')} to='/login'>
                Login
              </Link>
              <Link className={this.getClassNames('/register')} to='/register'>
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.profile
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TopMenu))
