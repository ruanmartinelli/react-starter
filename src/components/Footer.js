import React from 'react'
import styled from '@emotion/styled'
import Container from 'react-bootstrap/Container'

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
`

function Footer() {
  return (
    <StyledFooter>
      <Container fluid className="text-muted">Copyright App © 2020</Container>
    </StyledFooter>
  )
}

export default Footer
