import React from 'react'
import ReactDOM from 'react-dom'

import LocationCard from './LocationCard'

it('renders LocationCard no props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with location only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard location='asd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with title only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard title='titledd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with pmax only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard pmax='12' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard battery='-51' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with producing only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard producing='34' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with devicesCount - solar-panel only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard devicesCount='solar-panel' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with devicesCount - battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard devicesCount='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with all props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard title='title' devicesCount='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with title and location and devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard title='title' location='ds' devicesCount='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with solar panle with title only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard title='title' devicesCount='solar-panel' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with title location and devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard title='title' location='mod' devicesCount='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with title location and devicesCount battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard title='title' location='mod' devicesCount='battery' producing={45} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with title location and devicesCount battery and battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard title='title' location='mod' devicesCount='battery' battery={-5} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with title location and devicesCount battery and battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      title='title'
      location='mod'
      devicesCount='battery'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with title location and devicesCount solar-panel and battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      title='title'
      location='mod'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with title location and battery and producing and NO devicesCount', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard title='title' location='mod' battery={4} producing={69} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with title location and battery and producing and NO title', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      location='mod'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with title location and battery and producing and NO location', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      title='title'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with title location and battery and producing and NO location devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      title='title'
      location='mod3'
      devicesCount='battery'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard no props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production location only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard production={54} location='asd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production title only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard production={54} title='titledd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production pmax only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard production={54} pmax='12' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard production={54} battery='-51' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production producing only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard production={54} producing='34' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production devicesCount - solar-panel only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard production={54} devicesCount='solar-panel' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production devicesCount - battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard production={54} devicesCount='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production all props', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard production={54} title='title' devicesCount='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production title and location and devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard production={54} title='title' location='ds' devicesCount='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production solar panle with title only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard production={54} title='title' devicesCount='solar-panel' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production title location and devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard production={54} title='title' location='mod' devicesCount='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production title location and devicesCount battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      production={54}
      title='title'
      location='mod'
      devicesCount='battery'
      producing={45}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production title location and devicesCount battery and battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      production={54}
      title='title'
      location='mod'
      devicesCount='battery'
      battery={-5}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production title location and devicesCount battery and battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      production={54}
      title='title'
      location='mod'
      devicesCount='battery'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production title location and devicesCount solar-panel and battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      production={54}
      title='title'
      location='mod'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production title location and battery and producing and NO devicesCount', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      production={54}
      title='title'
      location='mod'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production title location and battery and producing and NO title', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      production={54}
      location='mod'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production title location and battery and producing and NO location', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      production={54}
      title='title'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with production title location and battery and producing and NO location devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      production={54}
      title='title'
      location='mod3'
      devicesCount='battery'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption location only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard consumption={54} location='asd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption title only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard consumption={54} title='titledd' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption pmax only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard consumption={54} pmax='12' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard consumption={54} battery='-51' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption producing only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard consumption={54} producing='34' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption devicesCount - solar-panel only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard consumption={54} devicesCount='solar-panel' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption devicesCount - battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocationCard consumption={54} devicesCount='battery' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption all props', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard consumption={54} title='title' devicesCount='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption title and location and devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard consumption={54} title='title' location='ds' devicesCount='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption solar panle with title only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard consumption={54} title='title' devicesCount='solar-panel' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption title location and devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      title='title'
      location='mod'
      devicesCount='battery'
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption title location and devicesCount battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      title='title'
      location='mod'
      devicesCount='battery'
      producing={45}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption title location and devicesCount battery and battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      title='title'
      location='mod'
      devicesCount='battery'
      battery={-5}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption title location and devicesCount battery and battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      title='title'
      location='mod'
      devicesCount='battery'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption title location and devicesCount solar-panel and battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      title='title'
      location='mod'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption title location and battery and producing and NO devicesCount', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      title='title'
      location='mod'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption title location and battery and producing and NO title', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      location='mod'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption title location and battery and producing and NO location', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      title='title'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption title location and battery and producing and NO location devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      title='title'
      location='mod3'
      devicesCount='battery'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production location only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard consumption={54} production={687} location='asd' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production title only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard consumption={54} production={687} title='titledd' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production pmax only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard consumption={54} production={687} pmax='12' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard consumption={54} production={687} battery='-51' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production producing only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard consumption={54} production={687} producing='34' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production devicesCount - solar-panel only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard consumption={54} production={687} devicesCount='solar-panel' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production devicesCount - battery only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard consumption={54} production={687} devicesCount='battery' />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production all props', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      title='title'
      devicesCount='battery'
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production title and location and devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      title='title'
      location='ds'
      devicesCount='battery'
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production solar panle with title only', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      title='title'
      devicesCount='solar-panel'
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production title location and devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      title='title'
      location='mod'
      devicesCount='battery'
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production title location and devicesCount battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      title='title'
      location='mod'
      devicesCount='battery'
      producing={45}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production title location and devicesCount battery and battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      title='title'
      location='mod'
      devicesCount='battery'
      battery={-5}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production title location and devicesCount battery and battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      title='title'
      location='mod'
      devicesCount='battery'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production title location and devicesCount solar-panel and battery and producing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      title='title'
      location='mod'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production title location and battery and producing and NO devicesCount', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      title='title'
      location='mod'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production title location and battery and producing and NO title', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      location='mod'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production title location and battery and producing and NO location', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      title='title'
      devicesCount='solar-panel'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LocationCard with consumption and production title location and battery and producing and NO location devicesCount battery', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LocationCard
      consumption={54}
      production={687}
      title='title'
      location='mod3'
      devicesCount='battery'
      battery={4}
      producing={69}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
