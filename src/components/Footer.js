import React from 'react'
import styled from 'styled-components'
import theme from '../theme'


const Footer = () => {
  return (
    <Container>
      <Text>© 2020 Torus Foundation</Text>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${theme.color.grey};
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(0.5)};
  color: white;
`

const Title = styled.p`
  color: #FFFFFFD2;
  font-size: 12px;
  letter-spacing: 0.4px;
  font-weight: 400;
  height: 50px;
  width: 100px;
`

const Text = styled.p`
  font-size: 12px;
  letter-spacing: 0.4px;
  font-weight: 400;
`



export default Footer
