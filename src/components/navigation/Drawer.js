import React from 'react'
import styled, { css } from 'styled-components'
import { withRouter, useHistory } from 'react-router-dom'
import theme from '../../theme'

const Component = ({ toggled, setToggled, subRoute, setSubRoute }) => {
  const history = useHistory()
  return (
    <>
      <Root toggled={toggled}>
        <Row><Link onClick={() => redirect({ history, setToggled, url: '/home', setSubRoute})}>Home</Link></Row>
        <Row><Link onClick={() => subRoute === 'downloads' ? setSubRoute('/') : setSubRoute('downloads')}>Downloads</Link></Row>
        <ExpandableRow show={subRoute === 'downloads'}>
          <Row><ExpandableLink onClick={() => redirect({ history, setToggled, url: '/downloads', setSubRoute})}>Wallets</ExpandableLink></Row>
          <Row><ExpandableLink onClick={() => redirect({ history, setToggled, url: '/downloads', setSubRoute})}>Miners</ExpandableLink></Row>
          <Row><ExpandableLink onClick={() => redirect({ history, setToggled, url: '/downloads', setSubRoute})}>Binaries</ExpandableLink></Row>
          <Row><ExpandableLink onClick={() => redirect({ history, setToggled, url: '/downloads', setSubRoute})}>Download4</ExpandableLink></Row>
        </ExpandableRow>
        <Row><Link onClick={() => redirect({ history, setToggled, url: '/community', setSubRoute})}>Community</Link></Row>
        <Row><Link onClick={() => subRoute === 'resources' ? setSubRoute('/') : setSubRoute('resources')}>Resources</Link></Row>
        <ExpandableRow show={subRoute === 'resources'}>
          <Row><ExpandableLink onClick={() => redirect({ history, setToggled, url: '/resources', setSubRoute})}>Resources1</ExpandableLink></Row>
          <Row><ExpandableLink onClick={() => redirect({ history, setToggled, url: '/resources', setSubRoute})}>Resources2</ExpandableLink></Row>
          <Row><ExpandableLink onClick={() => redirect({ history, setToggled, url: '/resources', setSubRoute})}>Resources3</ExpandableLink></Row>
          <Row><ExpandableLink onClick={() => redirect({ history, setToggled, url: '/resources', setSubRoute})}>Resources4</ExpandableLink></Row>
        </ExpandableRow>
      </Root>
      <Overlay toggled={toggled} onClick={e => toggledOff({ setToggled, setSubRoute})} />
    </>
  )
}

const Root = styled.div`
  width: 150px;
  height: calc(100vh - 64px);
  position: fixed;
  z-index: 3;
  top: 64px;
  left: -150px;
  background: #000000;
  transition: left ease-in-out 0.3s;
  ${props => props.toggled &&`
    left: 0;
    box-shadow: ${theme.shadow.dp16};
  `}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 64px;
  left: 0;
  transition: opacity 0.3s;
  background: #000000A0;
  opacity: ${props => props.toggled ? 1 : 0 };
  z-index: ${props => props.toggled ? 2 : -1 };
`

const Row = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  outline: none;
  height: 48px;
  width: 150px;
  &:active {
    transform: translateY(2px);
  }
  background-color: ${theme.color.black};
  padding: ${theme.spacing(1.5)};
`

const ExpandableRow = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  outline: none;
  height: 0;
  width: 150px;
  &:active {
    transform: translateY(2px);
  }
  transition: all 0.3s ease-in-out;
  ${props => props.show && css`
    height: 192px;

  `}
  overflow: hidden;
  background-color: ${theme.color.black};
`

const Link = styled.p`
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${theme.color.orange};
    cursor: pointer;
  }
  color: white;
  font-size: 16px;
  font-family: 'Robot', 'Helvetica Neue';
  height: min-content;
`

const ExpandableLink = styled(Link)`
  font-size: 14px;
  padding: ${theme.spacing(1.5)};
`

const redirect =  async({ setToggled, history, url, setSubRoute }) => {
  setToggled(false)
  await sleep(200)
  setSubRoute('/')
  history.push(url)

}

const toggledOff = async ({ setToggled, setSubRoute }) => {
  setToggled(false)
  await sleep(200)
  setSubRoute('/')
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default Component
