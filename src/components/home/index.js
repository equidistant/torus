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
        <H3>Cryptocurrency for a future economy</H3>
        <ScrollDown />
      </FirstScreen>
      <SecondScreen>
        <H2>About</H2>
        <Text>
          The Torus blockchain is an experimental open-source, hybrid Proof-of-Work (PoW) and Proof-of-Stake (PoS) blockchain fueled by the native Torus (TRS) cryptocurrency.
        </Text>
        <Text>Being GPU-mineable and permissionless, a high level of decentralisation, fair distribution and censorship-resistance is ensured from the very beginning. </Text>
        <Text>
          For the first 2 years, Torus will have a hybrid PoS/PoW emission.
          Mining (PoW) will last for approximately 2 years, until block height number, after which only PoS-based emission remains.
        </Text>
        <Text>In other words, after 2 years, all 100m TRS coins allocated for mining will be distributed and in circulation.</Text>
        <Text>Once there is no more emissions from mining, a 5% annual staking reward per year will continue indefinitely.</Text>
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
  font-family: 'Montserrat';
`

const SecondScreen = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.orange}AF;
  color: ${theme.color.black};
  font-family: 'Montserrat';
`

const H1 = styled.p`
  padding: ${theme.spacing(1)};
  font-size: 36px;
  letter-spacing: 3px;
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    font-size: 48px;
    letter-spacing: 5px;
  }
`

const H2 = styled.p`
  padding: ${theme.spacing(1)};
  font-size: 24px;
  letter-spacing: 2px;
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    font-size: 36px;
    letter-spacing: 4px;
  }
  font-weight: 700;
  margin-top: ${theme.spacing(1)};
`

const H3 = styled.p`
  padding: ${theme.spacing(1)};
  font-size: 18px;
  letter-spacing: 0px;
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    font-size: 24px;
    letter-spacing: 1px;
  }
  text-align: center;
`

const Text = styled.p`
  font-size: 16px;
  letter-spacing: 0px;
  width: 70%;
  padding: ${theme.spacing(1)};
  margin-top: ${theme.spacing(1)};
  text-align: justify;
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
