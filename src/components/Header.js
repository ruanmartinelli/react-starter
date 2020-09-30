import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function Header() {
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('accessToken')
    history.go('/')
  }

  return (
    <header>
      <Container fluid>
        <Navbar expand="lg" className="border-bottom"> 
          <LinkContainer to="/">
            <Navbar.Brand>
              <h1>
                <span role="img" aria-label="Beer emoji">
                  🍺
                </span>
              </h1>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <LinkContainer to="/">
                <Nav.Link>Search</Nav.Link>
              </LinkContainer> */}
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Navbar.Collapse>
          <Button onClick={logout}>Logout</Button>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header
