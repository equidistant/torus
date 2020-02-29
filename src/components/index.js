import React, { useState, useEffect, useRef } from 'react'
import { Route, useHistory } from 'react-router-dom'
import Navigation from './navigation'
import Home from './home'
import Downloads from './downloads'
import Footer from './Footer'
import { GlobalStyle } from '../style'

export const App = () => {
  const [toggled, setToggled] = useState(false)
  const history = useHistory()
  const walletsRef = useRef(null)
  const minersRef = useRef(null)
  return (
    <>
      <GlobalStyle toggled={toggled}/>
      <Navigation toggled={toggled} setToggled={setToggled} refs={{walletsRef, minersRef}}/>
      <Route exact path='/' component={Home} />
      <Route exact path='/downloads' component={() => <Downloads refs={{walletsRef, minersRef}}/>}/>
      <Footer />
    </>
  )
}
