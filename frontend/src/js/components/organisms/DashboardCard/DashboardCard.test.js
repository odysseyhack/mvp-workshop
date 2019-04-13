import React from 'react'
import ReactDOM from 'react-dom'

import DashboardCard from './DashboardCard'

it('renders DashboardCard no props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DashboardCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DashboardCard no props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DashboardCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it('renders DashboardCard with image only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <DashboardCard image='https://images.vexels.com/media/users/3/145131/isolated/preview/d2ba09d9b4856df5b15cdc5636a45b37-sun-large-wavy-beams-icon-by-vexels.png' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
it('renders DashboardCard with title only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DashboardCard title='tesing' />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it('renders DashboardCard with description only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DashboardCard description='testWow' />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it('renders DashboardCard with big only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DashboardCard big />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DashboardCard with basic only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DashboardCard basic />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it('renders DashboardCard with noMargin only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DashboardCard noMargin />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DashboardCard with noMargin and basic only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DashboardCard basic noMargin />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it('renders DashboardCard with noMargin and basic and big only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DashboardCard basic noMargin big />, div)
  ReactDOM.unmountComponentAtNode(div)
})
