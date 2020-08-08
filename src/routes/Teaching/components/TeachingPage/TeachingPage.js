import React from 'react'
import { Item, Container } from 'semantic-ui-react'
import Class from 'components/Class'
import { classes } from 'constants/classes'
import Scrollbar from 'react-scrollbars-custom'

function TeachingPage() {
  return (
    <Container
      style={{ background: '#fff', boxShadow: '0 1px 2px #ccc', width: '80%' }}
    >
      <Scrollbar style={{ height: 'calc(100vh - 72.7031px)' }}>
        <Item.Group divided style={{ padding: '1em 2em' }}>
          {classes.map((cls, i) => (
            <Class cls={cls} key={i} />
          ))}
        </Item.Group>
      </Scrollbar>
    </Container>
  )
}

export default TeachingPage
