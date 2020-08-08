import React from 'react'
import { Container } from 'semantic-ui-react'

function NotFoundPage() {
  return (
    <Container
      style={{
        width: '80%',
        height: 'calc(100% - 72.7031px)',
        margin: 'auto',
        background: '#fff',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <h1>Whoops! 404!</h1>
    </Container>
  )
}

export default NotFoundPage
