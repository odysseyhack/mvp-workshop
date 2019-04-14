import React, { Component } from 'react'
import { connect } from 'react-redux'
import './TopMenu.css'
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap'
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

  renderValidatorMenu = () => {
    return (
      <Navbar.Collapse className='justify-content-end'>
        <Nav>
          <Link className={this.getClassNames('/requests')} to='/requests'>
            Requests
          </Link>
          <Link className={this.getClassNames('/devices')} to='/devices'>
            Devices
          </Link>
          <Link className={this.getClassNames('/locations')} to='/locations'>
            Locations
          </Link>
          <Link className={this.getClassNames('/validators')} to='/validators'>
            Validators
          </Link>
        </Nav>
      </Navbar.Collapse>
    )
  }

  renderPublicMenuAuth = () => {
    return (
      <Navbar.Collapse className='justify-content-end'>
        <Nav>
          <Link className={this.getClassNames('/')} to='/'>
            Overview
          </Link>
          <Link
            className={this.getClassNames('/installations')}
            to='/installations'
          >
            My installations
          </Link>
          <Link className={this.getClassNames('/explore')} to='/explore'>
            Explore
          </Link>
        </Nav>
      </Navbar.Collapse>
    )
  }

  render () {
    const { role } = this.props
    const userImage = props => {
      return (
        <div onClick={props.onClick}>
          <img
            style={{ borderRadius: '50%', objectFit: 'cover' }}
            alt='user profile'
            src='https://i1.wp.com/frfars.org/wp-content/uploads/2018/12/place-holder-for-profile-picture-4.png?ssl=1'
            width='30'
            height='30'
          />
        </div>
      )
    }

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
          {role === 1
            ? this.renderPublicMenuAuth()
            : this.renderValidatorMenu()}
          <Dropdown className='topMenuDropdown m-0 nav-link'>
            <Dropdown.Toggle as={userImage} />
            <Dropdown.Menu>
              <Dropdown.Item>
                <Nav.Link onClick={this.props.actions.logoutUser}>
                  Logout
                </Nav.Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.profile,
  userId: state.user.userId,
  role: state.user.role
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TopMenu))
