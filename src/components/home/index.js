import React from 'react'
import styled, { keyframes } from 'styled-components'
import Navigation from '../navigation'
import { LogoImg } from '../../images'
import theme from '../../theme'

const Component = () => {
  return (
    <Root>
      <FirstScreen>
        <H1>Torus Coin</H1>
        <Image />
        <H2>Cryptocurrency for a future economy</H2>
        <ScrollDown />
      </FirstScreen>
      <SecondScreen>

      </SecondScreen>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FirstScreen = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const SecondScreen = styled.div`
  width: 100%;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.orange};
`

const H1 = styled.p`
  font-size: 36px;
  letter-spacing: 3px;
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    font-size: 48px;
    letter-spacing: 5px;
  }
`

const H2 = styled.p`
  font-size: 18px;
  letter-spacing: 0px;
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    font-size: 24px;
    letter-spacing: 1px;
  }
`

const Image = styled.div`
  width: 162px;
  height: 75px;
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    width: 216px;
    height: 100px;
  }
  background-image: url(${LogoImg.torus.big.black});
  background-size: cover;
  background-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const bounce = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-15px, 15px);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
`

const ScrollDown = styled.span`
  position: absolute;
  bottom: 30px;
  left: calc(50% - 15px);
  width: calc(30px);
  height: calc(30px);
  border-left: 2px solid ${theme.color.orange};
  border-bottom: 2px solid ${theme.color.orange};
  transform: rotate(-45deg);
  animation: ${bounce} 2s infinite;
  box-sizing: border-box;
  opacity: 1;
  z-index: 2;
`

export default Component
