import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useHistory } from 'react-router-dom'
import Drawer from './Drawer'
import { MenuImg, LogoImg } from '../../images'
import theme from '../../theme'
import { useHover } from '../../hooks'

const Component = ({ toggled, setToggled }) => {
  const [subRoute, setSubRoute] = useState('/')
  const [downloadsRef, isDownloadsHovered] = useHover()
  const [resourcesRef, isResourcesHovered] = useHover()
  const history = useHistory()
  return (
    <Root>
      <Drawer toggled={toggled} setToggled={setToggled} subRoute={subRoute} setSubRoute={setSubRoute}/>
      <Menu onClick={e => toggledOnOff({ toggled, setToggled, setSubRoute})}/>
      <Link onClick={() => redirect({ history, setToggled, url: '/', setSubRoute})}>Home</Link>
      <DropdownRoot ref={downloadsRef}>
        <Link onClick={() => redirect({ history, setToggled, url: '/downloads', setSubRoute})}>Downloads</Link>
        <Dropdown show={isDownloadsHovered}>
          <Link onClick={() => redirect({ history, setToggled, url: '/downloads#wallets', setSubRoute})}>Wallets</Link>
          <Link onClick={() => redirect({ history, setToggled, url: '/downloads#miners', setSubRoute})}>Miners</Link>
          <Link onClick={() => redirect({ history, setToggled, url: '/downloads#binaries', setSubRoute})}>Binaries</Link>
        </Dropdown>
      </DropdownRoot>
      <Logo />
      <Link onClick={() => redirect({ history, setToggled, url: '/community', setSubRoute})}>Community</Link>
      <DropdownRoot ref={resourcesRef}>
        <Link onClick={() => redirect({ history, setToggled, url: '/resources', setSubRoute})}>Resources</Link>
        <Dropdown show={isResourcesHovered}>
          <Link>Resource1</Link>
          <Link>Resource2</Link>
          <Link>Resource3</Link>
        </Dropdown>
      </DropdownRoot>
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
  background-image: url(${LogoImg.torus.small.white});
  @media only screen and (min-width: ${theme.breakpoint.small}) {
    width: 48px;
    height: 48px;
    background-image: url(${LogoImg.zero.white});
  }
  @media only screen and (max-width: ${theme.breakpoint.small}) {
    margin-left: ${theme.spacing(1)};
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

const Menu = styled.button`
  height: 30px;
  width: 30px;
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
  background-color: transparent;
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

const DropdownRoot = styled.div`
  position: relative;
`

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  outline: none;
  height: 0;
  width: 125px;
  &:active {
    transform: translateY(2px);
  }
  transition: all 0.3s ease-in-out;
  ${props => props.show && css`
    height: 144px;
  `}
  overflow: hidden;
  background-color: ${theme.color.black};
  position: absolute;
  z-index: 3;
`


const toggledOnOff = async ({ toggled, setToggled, setSubRoute }) => {
  if (toggled) {
    setToggled(false)
    await sleep(200)
    setSubRoute('/')
  } else {
    setToggled(true)
  }
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const redirect =  async({ setToggled, history, url, setSubRoute }) => {
  setToggled(false)
  await sleep(200)
  setSubRoute('/')
  history.push(url)
}



export default Component
