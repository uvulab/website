import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'

function ProjectsPage() {
  return (
    <Container
      style={{
        background: '#fff',
        boxShadow: '0 1px 2px #ccc',
        width: '80%',
        height: 'calc(100vh - 72.7031px)',
        display: 'grid'
      }}
    >
      <Header as='h1' icon style={{ margin: 'auto' }}>
        <Icon name='wrench' />
        Under Construction
      </Header>
    </Container>
  )
}

export default ProjectsPage
