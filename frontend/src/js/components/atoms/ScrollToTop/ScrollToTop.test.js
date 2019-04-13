import React from 'react'
import ReactDOM from 'react-dom'

import ScrollToTop from './ScrollToTop'

it('renders ScrollToTop no props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ScrollToTop />, div)
  ReactDOM.unmountComponentAtNode(div)
})
