import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Navigation from '../navigation'
import { LogoImg } from '../../images'
import theme from '../../theme'

const Component = () => {
  return (
    <Root>
      <FirstScreen>
        <FirstScreenRoot>
          <Image />
          <H3>Cryptocurrency for a future economy</H3>
          <ButtonGroup>
            <Button>Wallet</Button>
            <Button>Miner</Button>
            <Button>Binaries</Button>
          </ButtonGroup>
        </FirstScreenRoot>
      </FirstScreen>
      <SecondScreen>
        <Text first={true}>
          <strong>The Torus blockchain </strong> is an experimental open-source, hybrid Proof-of-Work (PoW) and Proof-of-Stake (PoS) blockchain fueled by the native Torus (TRS) cryptocurrency.
        </Text>
        <Text>
          For the <strong> first 2 years</strong>, Torus will have a <strong>hybrid PoS/PoW </strong> emission.
          Mining (PoW) will last for approximately 2 years, until block height number, after which only <strong>PoS-based </strong> emission remains.
        </Text>
        <Text last={true}>Once there is no more emissions from mining, a <strong>5% annual staking reward </strong> per year will continue <strong>indefinitely</strong>.</Text>
      </SecondScreen>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: max-content;
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
`

const FirstScreenRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: min-content;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: 'Montserrat';
  margin-bottom: 32px;
  padding: ${theme.spacing(1)};
  max-width: 550px;
`

const SecondScreen = styled.div`
  width: 100%;
  height: max-content;
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
  font-weight: 700;
  width: max-content;
`

const H2 = styled.p`
  padding: ${theme.spacing(1)};
  font-size: 24px;
  letter-spacing: 2px;
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    font-size: 36px;
    letter-spacing: 4px;
  }
  font-weight: 500;
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
  ${props => props.last && css`
    margin-bottom: ${theme.spacing(2)};
  `}
  ${props => props.first && css`
    margin-top: ${theme.spacing(2)};
  `}
  max-width: 600px;
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

const ButtonGroup = styled.div`
  margin-top: ${theme.spacing(1)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    flex-direction: row;
  }
`

const Button = styled.button`
  outline: none;
  font-size: 16px;
  width: 150px;
  height: 35px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  border: 1px solid ${theme.color.black};
  background-color: transparent;
  box-shadow: ${theme.shadow.dp4};
  margin: ${theme.spacing(1)};
  &:hover {
    border: 1px solid ${theme.color.orange};
    color: ${theme.color.orange};
  }
  &:active {
    box-shadow: ${theme.shadow.dp0};
    border: 1px solid ${theme.color.orange};
    color: ${theme.color.orange};
    transform: translateY(1px);
  }
`

export default Component
