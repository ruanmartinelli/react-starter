import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

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

  //   id: 5494,
  //   name: "MadTree Brewing",
  //   brewery_type: "regional",
  //   street: "3301 Madison Rd",
  //   city: "Cincinnati",
  //   state: "Ohio",
  //   postal_code: "45209-1132",
  //   country: "United States",
  //   longitude: "-84.4239715",
  //   latitude: "39.1563725",
  //   phone: "5138368733",
  //   website_url: "http://www.madtreebrewing.com",
  //   updated_at: "2018-08-24T15:44:22.281Z"

  if (!brewery) {
    return (
      <Container className="text-center pt-5">
        <p>Loading...</p>
      </Container>
    )
  }

  return (
    <Container>
      <h1>
        #{id} - {brewery.name}
      </h1>
    </Container>
  )
}

export default BreweryDetail
