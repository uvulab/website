import React from 'react'
import { Item, Container } from 'semantic-ui-react'
import Paper from 'components/Paper'
import { papers } from 'constants/papers'
import Scrollbar from 'react-scrollbars-custom'

function PublicationsPage() {
  return (
    <Container
      style={{
        background: '#fff',
        boxShadow: '0 1px 2px #ccc',
        width: '80%',
        margin: '0 0'
      }}
    >
      <Scrollbar style={{ height: 'calc(100vh - 72.7031px)' }}>
        <Item.Group divided style={{ padding: '1em 2em' }}>
          {papers.map((paper, i) => (
            <Paper paper={paper} key={i} />
          ))}
        </Item.Group>
      </Scrollbar>
    </Container>
  )
}

export default PublicationsPage
