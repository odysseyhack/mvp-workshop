import React, { Component } from 'react'
import { connect } from 'react-redux'
import './TopMenu.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as appActions from '../../../redux/actions'
import { bindActionCreators } from 'redux'

class TopMenu extends Component {
  render () {
    return (
      <>
        <Navbar className='topMenu' expand='lg' variant='light' sticky='top'>
          <Container>
            <Link to='/'>
              <Navbar.Brand>
                {/* <img
                  alt='rentijer-logo'
                  src={require('../../../../assets/images/glava-logo.png')}
                /> */}
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
              <Nav>
                <Link className='nav-link' to='/search'>
                  Trazi
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
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
)(TopMenu)
