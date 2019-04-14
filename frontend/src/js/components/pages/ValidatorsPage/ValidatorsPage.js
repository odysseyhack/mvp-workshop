import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './ValidatorsPage.css'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import { Row, Col, Button } from 'react-bootstrap'
import ValidatorCard from '../../organisms/ValidatorCard/ValidatorCard'
import AddValidatorModal from '../../organisms/AddValidatorModal/AddValidatorModal'

class ValidatorsPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      show: false
    }
  }

  componentDidMount = () => {
    const { actions } = this.props
    actions.getValidatorsRequests()
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render () {
    const { show } = this.state
    const { validatorRequests } = this.props
    
    return (
      <RegularLayout>
        <Row>
          <Col>
            <h3>Validators (10)</h3>
          </Col>

          <Col>
            <Button
              variant='primary'
              type='submit'
              className='w-auto border-0 float-right defaultButton pl-4 pr-4'
              onClick={() => {
                this.setState({ show: true })
              }}
            >
              + Suggest validator
            </Button>
          </Col>
        </Row>
        <Row className='mt-4 pl-3 pr-3'>
          <Col md='3'>
            <p className='installationSections'>NAME</p>
          </Col>
          <Col>
            <p className='installationSections'>COMPANY</p>
          </Col>
          <Col>
            <p className='installationSections'>VALIDATOR SINCE</p>
          </Col>
          <Col md='5' className='p-0'>
            <p className='installationSections'>VOTEN ON</p>
          </Col>
        </Row>
        <ValidatorCard
          name='John Doe'
          company='MVP Workshop'
          validatorSince='MAR 12, 2018'
          votedOn='124'
        />
        <AddValidatorModal show={show} hide={this.hideModal} />
      </RegularLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    validatorRequests: state.generalData.validatorRequests
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ValidatorsPage)
