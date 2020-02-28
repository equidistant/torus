import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import Navigation from './navigation'
import Home from './home'
import { GlobalStyle } from '../style'

export const App = () => {
  const [toggled, setToggled] = useState(false)
  const history = useHistory()
  return (
    <>
      <GlobalStyle />
      <Navigation toggled={toggled} setToggled={setToggled}/>
      <Route exact path='/' component={Home} />
    </>
  )
}
