import React from 'react'
import styled from 'styled-components'
import Navigation from '../navigation'

const Component = () => {
  return (
    <Root>
      <Navigation />
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`

export default Component
