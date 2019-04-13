import React from 'react'
import ReactDOM from 'react-dom'

import ExploreCard from './ExploreCard'

it('renders ExploreCard no props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ExploreCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})