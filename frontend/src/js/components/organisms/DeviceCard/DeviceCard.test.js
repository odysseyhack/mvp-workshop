import React from 'react'
import ReactDOM from 'react-dom'

import DeviceCard from './DeviceCard'

it('renders DeviceCard no props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with model only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard model='asd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with brand only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard brand='branddd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with pmax only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard pmax='12' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with minTemp only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard minTemp='-51' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with maxTemp only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard maxTemp='34' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with type - solar-panel only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard type='solar-panel' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with type - battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard type='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with all props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard brand='brand' type='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with brand and model and type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard brand='brand' model='ds' type='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with solar panle with brand only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard brand='brand' type='solar-panel' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with brand model and type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeviceCard brand='brand' model='mod' type='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with brand model and type battery and maxTemp', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <DeviceCard brand='brand' model='mod' type='battery' maxTemp={45} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with brand model and type battery and minTemp', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <DeviceCard brand='brand' model='mod' type='battery' minTemp={-5} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with brand model and type battery and minTemp and maxTemp', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <DeviceCard
      brand='brand'
      model='mod'
      type='battery'
      minTemp={4}
      maxTemp={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with brand model and type solar-panel and minTemp and maxTemp', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <DeviceCard
      brand='brand'
      model='mod'
      type='solar-panel'
      minTemp={4}
      maxTemp={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with brand model and minTemp and maxTemp and NO Type', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <DeviceCard brand='brand' model='mod' minTemp={4} maxTemp={69} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with brand model and minTemp and maxTemp and NO brand', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <DeviceCard model='mod' type='solar-panel' minTemp={4} maxTemp={69} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with brand model and minTemp and maxTemp and NO model', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <DeviceCard brand='brand' type='solar-panel' minTemp={4} maxTemp={69} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders DeviceCard with brand model and minTemp and maxTemp and NO model type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <DeviceCard
      brand='brand'
      model='mod3'
      type='battery'
      minTemp={4}
      maxTemp={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
