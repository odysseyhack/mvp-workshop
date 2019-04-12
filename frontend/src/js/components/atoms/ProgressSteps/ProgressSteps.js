import React, { Component } from 'react'
import classNames from 'classnames'
import './ProgressSteps.css'

class ProgressSteps extends Component {
  renderAllSteps = () => {
    const { stepCount, activeStep } = this.props
    const allSteps = []
    for (let i = 1; i <= stepCount; i++) {
      const className = classNames('step-div', {
        'active-step': i === activeStep
      })
      allSteps.push(<div className={className} />)
    }
    return allSteps
  }

  render () {
    const Steps = this.renderAllSteps
    return (
      <div className='m-auto'>
        <Steps />
      </div>
    )
  }
}

export default ProgressSteps
