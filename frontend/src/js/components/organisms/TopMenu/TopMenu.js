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
    return null
    // (
    //   <Navbar.Collapse className='justify-content-end'>
    //     <Nav>
    //       <Link className={this.getClassNames('/')} to='/'>
    //         Overview
    //       </Link>
    //       <Link
    //         className={this.getClassNames('/installations')}
    //         to='/installations'
    //       >
    //         My installations
    //       </Link>
    //       <Link className={this.getClassNames('/explore')} to='/explore'>
    //         Explore
    //       </Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // )
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
          {this.renderPublicMenuAuth()}
          {this.renderValidatorMenu()}
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
