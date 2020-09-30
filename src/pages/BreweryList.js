import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'

function BreweryList() {
  const [breweries, setBreweries] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    ;(async () => {
      const url = `https://api.openbrewerydb.org/breweries?page=${page}&per_page=10`
      const response = await fetch(url)
      const repos = await response.json()

      setBreweries(repos)
    })()
  }, [page])

  return (
    <Container>
      <div className="my-4">
        <h1>Breweries</h1>
        <p className="text-muted">List of all Breweries</p>
      </div>
      {breweries && (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Location</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {breweries.map((b) => (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>
                    <Link to={`/breweries/${b.id}`}>{b.name}</Link>
                  </td>
                  <td>
                    {b.city}, {b.state}
                  </td>
                  <td>
                    <a href={b.website_url}>View</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            {[1, 2, 3, 4, 5].map((p) => (
              <Pagination.Item
                active={page === p}
                key={p}
                onClick={() => setPage(p)}
              >
                {p}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      )}
    </Container>
  )
}

export default BreweryList
