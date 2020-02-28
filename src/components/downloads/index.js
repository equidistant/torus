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
            <Text>
              Send, receive, and store Torus. The desktop wallet also enables minting blocks and securing of the network.
            </Text>
          </Column>
        </FirstScreenRoot>
      </FirstScreen>
      <Divider />
      <SecondScreen>
        <FirstScreenRoot>
          <Column>
            <H2>Mining</H2>
            <Text>To mine Torus, you need mining software.
              Below is an unofficial list of mining software that has been found to have a decent reputation.
            </Text>
          </Column>
        </FirstScreenRoot>
      </SecondScreen>
      <Divider />
      <ThirdScreen>
        <FirstScreenRoot>
          <Column>
            <H2>Binaries</H2>
            <Text>To mine Torus, you need mining software.
              Below is an unofficial list of mining software that has been found to have a decent reputation.
            </Text>
          </Column>
        </FirstScreenRoot>
      </ThirdScreen>
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
  height: min-content;
  display: flex;
  flex-direction: column;
`

const Divider = styled.div`
  padding: ${theme.spacing(1)};
  border-bottom: 1px solid rgba(0,0,0,0.1);
  width: 60%;
  align-self: center;
`

const SecondScreen = styled(FirstScreen)`

`

const ThirdScreen = styled(FirstScreen)`
  background-color: white;
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
  padding: ${theme.spacing(1)};
`

const Column = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
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
  margin-top: ${theme.spacing(1)};
  padding: ${theme.spacing(1)};
  font-size: 32px;
  font-weight: 400;
  color: ${theme.color.orange};
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
  width: 100%;
  padding: ${theme.spacing(1)};
  margin-top: ${theme.spacing(1)};
  text-align: justify;
  ${props => props.last && css`
    margin-bottom: ${theme.spacing(2)};
  `}
  ${props => props.first && css`
    margin-top: ${theme.spacing(2)};
  `}
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
