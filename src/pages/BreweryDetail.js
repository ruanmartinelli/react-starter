import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Cover = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom:2em;
`

function BreweryDetail() {
  const { id } = useParams()
  const [brewery, setBrewery] = useState(null)

  useEffect(() => {
    ;(async () => {
      const url = `https://api.openbrewerydb.org/breweries/${id}`
      const response = await fetch(url)
      const repos = await response.json()

      setBrewery(repos)
    })()
  })

  if (!brewery) {
    return (
      <Container className="text-center pt-5">
        <p>Loading...</p>
      </Container>
    )
  }

  return (
    <Container>
      <Cover src="https://images.unsplash.com/photo-1559526642-c3f001ea68ee"></Cover>
      <h1>{brewery.name}</h1>
      <p className="text-muted">
        {brewery.city}, {brewery.state}
      </p>
      <Button
        className="mr-1"
        onClick={() => (window.location = brewery.website_url)}
      >
        Visit website
      </Button>
      <Button
        onClick={() =>
          (window.location = `https://www.google.com/maps/dir/${brewery.latitude},${brewery.longitude}/`)
        }
      >
        Directions
      </Button>
    </Container>
  )
}

export default BreweryDetail
