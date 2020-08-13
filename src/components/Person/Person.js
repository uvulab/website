import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function Person({ person }) {
  const { name, meta, description, extra } = person
  return (
    <Card style={{ textAlign: 'center', margin: '1em auto' }}>
      {/*
      <Image
        src='https://www.eecs.utk.edu/wp-content/uploads/2018/07/Sadovnik_EECS.jpg'
        wrapped
        ui={false}
      />
      */}
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>{meta}</span>
        </Card.Meta>
        {description && <Card.Description>{description}</Card.Description>}
      </Card.Content>
      {extra && <Card.Content extra>{extra}</Card.Content>}
    </Card>
  )
}

export default Person
