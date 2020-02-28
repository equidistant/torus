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
          <Column>
            <H2>Wallets</H2>

          </Column>
          <Column>
            <H2>Miners</H2>
          </Column>
          <Column>
            <H2>Binaries</H2>
          </Column>
        </FirstScreenRoot>
      </FirstScreen>
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
`

const Column = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  outline: none;
  font-size: 16px;
  width: 100px;
  height: 35px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  border: 1px solid ${theme.color.black};
  background-color: transparent;
  box-shadow: ${theme.shadow.dp4};
  &:hover {
    border: 1px solid ${theme.color.orange};
    color: ${theme.color.orange};
  }
  &:active {
    box-shadow: ${theme.shadow.dp0};
    border: 1px solid ${theme.color.black};
    color: ${theme.color.black};
    transform: translateY(1px);
  }
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    width: 150px;
  }
`

export default Component
