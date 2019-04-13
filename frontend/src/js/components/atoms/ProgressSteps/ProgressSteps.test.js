import React from 'react'
import ReactDOM from 'react-dom'

import ProgressSteps from './ProgressSteps'

it('renders ProgressSteps no props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressSteps />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders ProgressSteps only stepCount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressSteps stepCount={2} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders ProgressSteps only activeStep', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressSteps activeStep={1} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders ProgressSteps all props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressSteps stepCount={3} activeStep={1} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
