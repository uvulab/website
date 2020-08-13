import React from 'react'
import { Container, Header, Segment, Grid, Icon } from 'semantic-ui-react'
import Person from 'components/Person'
import Scrollbar from 'react-scrollbars-custom'
import { allPeople } from 'constants/people'

function PeopleSegment({ data, label, cols }) {
  return (
    <Segment vertical>
      <Grid stackable container centered>
        <Grid.Row>
          <Header as='h2' icon>
            <Icon name='student' />
            {label}
          </Header>
        </Grid.Row>
        <Grid.Row
          centered
          verticalAlign='middle'
          columns={data.length < cols ? data.length : cols}
        >
          {data.map((person, i) => (
            <Grid.Column key={i}>
              <Person person={person} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

function PeoplePage() {
  return (
    <Container
      style={{ background: '#fff', boxShadow: '0 1px 2px #ccc', width: '80%' }}
    >
      <Scrollbar style={{ height: 'calc(100vh - 72.7031px)' }}>
        {allPeople.map((data, i) => (
          <PeopleSegment {...data} key={i} />
        ))}
      </Scrollbar>
    </Container>
  )
}

export default PeoplePage
