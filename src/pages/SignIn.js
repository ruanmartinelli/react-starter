import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SignIn({ isAuth }) {
  const history = useHistory()

  const onSubmitForm = (event) => {
    event.preventDefault()
    localStorage.setItem('accessToken', '123abc')
    history.go('/')
  }

  if(isAuth) return <Redirect to="/"></Redirect>

  return (
    <Container className="mt-5">
      <h1>Sign In</h1>
      <Form onSubmit={onSubmitForm}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default SignIn
