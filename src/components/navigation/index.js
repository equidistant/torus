import React from 'react'
import styled, { css } from 'styled-components'
import { MenuImg, LogoImg } from '../../images'
import theme from '../../theme'

const Component = () => {
  return (
    <Root>
      <Menu />
      <Link>Home</Link>
      <Link>Downloads</Link>
      <Logo />
      <Link>Community</Link>
      <Link>Resources</Link>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 64px;
  background-color: #000000;
  display: flex;
  align-items: center;
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    justify-content: center;
  }
  padding: ${theme.spacing(1)};
`

const Logo = styled.button.attrs(props => ({
  type: 'button'
  }))`
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
  width: 104px;
  height: 48px;
  background-image: url(${LogoImg.torus.white});
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    width: 48px;
    height: 48px;
    background-image: url(${LogoImg.zero.white});
  }
  background-size: cover;
  background-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const Menu = styled.div`
  height: 35px;
  width: 35px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-align: center;
  background-image: url(${MenuImg.primary});
  transition: background 0.2s ease-in-out;
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    display: none;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-image: url(${MenuImg.secondary});
  }
  &:active {
    transform: translateY(2px);
  }
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
`

const Link = styled.button`
  @media only screen and (max-width: ${theme.breakpoint.small}) {
    display: none;
  }
  border: none;
  outline: none;
  transition: color 0.3s ease-in-out;
  background-color: ${theme.color.black};
  &:hover {
    color: ${theme.color.orange};
    cursor: pointer;
  }
  color: white;
  height: 48px;
  width: 125px;
  font-size: 16px;
  &:active {
    transform: translateY(2px);
  }
  font-family: 'Robot', 'Helvetica Neue';
`


export default Component
