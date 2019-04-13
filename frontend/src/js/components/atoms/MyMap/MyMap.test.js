import React from 'react'
import ReactDOM from 'react-dom'

import MyMap from './MyMap'

it('renders MyMap only default zoom', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MyMap defaultZoom={18} isMarkerShown />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders MyMap only lat and lng', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MyMap lat={53.2} lng={6.5374235} isMarkerShown />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders MyMap no props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MyMap isMarkerShown />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders MyMap with default zoom and lat and lng', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MyMap defaultZoom={18} lat={53.2} lng={6.5374235} isMarkerShown />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
