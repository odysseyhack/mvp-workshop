import React from 'react'
import ReactDOM from 'react-dom'

import InstallationCard from './InstallationCard'

it('renders InstallationCard no props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with model only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard model='asd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with name only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard name='namedd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with pmax only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard pmax='12' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard battery='-51' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with voltage only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard voltage='34' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with type - solar-panel only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard type='solar-panel' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with type - battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard type='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with all props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard name='name' type='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with name and model and type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard name='name' model='ds' type='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with solar panle with name only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard name='name' type='solar-panel' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with name model and type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard name='name' model='mod' type='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with name model and type battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard name='name' model='mod' type='battery' voltage={45} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with name model and type battery and battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard name='name' model='mod' type='battery' battery={-5} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with name model and type battery and battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      name='name'
      model='mod'
      type='battery'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with name model and type solar-panel and battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      name='name'
      model='mod'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with name model and battery and voltage and NO Type', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard name='name' model='mod' battery={4} voltage={69} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with name model and battery and voltage and NO name', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      model='mod'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with name model and battery and voltage and NO model', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      name='name'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with name model and battery and voltage and NO model type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      name='name'
      model='mod3'
      type='battery'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard no props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production model only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard production={54} model='asd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production name only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard production={54} name='namedd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production pmax only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard production={54} pmax='12' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard production={54} battery='-51' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production voltage only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard production={54} voltage='34' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production type - solar-panel only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard production={54} type='solar-panel' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production type - battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard production={54} type='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production all props', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard production={54} name='name' type='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production name and model and type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard production={54} name='name' model='ds' type='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production solar panle with name only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard production={54} name='name' type='solar-panel' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production name model and type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard production={54} name='name' model='mod' type='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production name model and type battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      production={54}
      name='name'
      model='mod'
      type='battery'
      voltage={45}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production name model and type battery and battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      production={54}
      name='name'
      model='mod'
      type='battery'
      battery={-5}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production name model and type battery and battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      production={54}
      name='name'
      model='mod'
      type='battery'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production name model and type solar-panel and battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      production={54}
      name='name'
      model='mod'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production name model and battery and voltage and NO Type', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      production={54}
      name='name'
      model='mod'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production name model and battery and voltage and NO name', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      production={54}
      model='mod'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production name model and battery and voltage and NO model', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      production={54}
      name='name'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with production name model and battery and voltage and NO model type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      production={54}
      name='name'
      model='mod3'
      type='battery'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption model only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard consumption={54} model='asd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption name only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard consumption={54} name='namedd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption pmax only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard consumption={54} pmax='12' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard consumption={54} battery='-51' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption voltage only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard consumption={54} voltage='34' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption type - solar-panel only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard consumption={54} type='solar-panel' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption type - battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstallationCard consumption={54} type='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption all props', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard consumption={54} name='name' type='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption name and model and type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard consumption={54} name='name' model='ds' type='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption solar panle with name only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard consumption={54} name='name' type='solar-panel' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption name model and type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      name='name'
      model='mod'
      type='battery'
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption name model and type battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      name='name'
      model='mod'
      type='battery'
      voltage={45}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption name model and type battery and battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      name='name'
      model='mod'
      type='battery'
      battery={-5}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption name model and type battery and battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      name='name'
      model='mod'
      type='battery'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption name model and type solar-panel and battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      name='name'
      model='mod'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption name model and battery and voltage and NO Type', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      name='name'
      model='mod'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption name model and battery and voltage and NO name', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      model='mod'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption name model and battery and voltage and NO model', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      name='name'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption name model and battery and voltage and NO model type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      name='name'
      model='mod3'
      type='battery'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production model only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard consumption={54} production={687} model='asd' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production name only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard consumption={54} production={687} name='namedd' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production pmax only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard consumption={54} production={687} pmax='12' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard consumption={54} production={687} battery='-51' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production voltage only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard consumption={54} production={687} voltage='34' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production type - solar-panel only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard consumption={54} production={687} type='solar-panel' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production type - battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard consumption={54} production={687} type='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production all props', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      name='name'
      type='battery'
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production name and model and type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      name='name'
      model='ds'
      type='battery'
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production solar panle with name only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      name='name'
      type='solar-panel'
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production name model and type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      name='name'
      model='mod'
      type='battery'
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production name model and type battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      name='name'
      model='mod'
      type='battery'
      voltage={45}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production name model and type battery and battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      name='name'
      model='mod'
      type='battery'
      battery={-5}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production name model and type battery and battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      name='name'
      model='mod'
      type='battery'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production name model and type solar-panel and battery and voltage', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      name='name'
      model='mod'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production name model and battery and voltage and NO Type', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      name='name'
      model='mod'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production name model and battery and voltage and NO name', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      model='mod'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production name model and battery and voltage and NO model', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      name='name'
      type='solar-panel'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders InstallationCard with consumption and production name model and battery and voltage and NO model type battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InstallationCard
      consumption={54}
      production={687}
      name='name'
      model='mod3'
      type='battery'
      battery={4}
      voltage={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
