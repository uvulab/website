import React from 'react'
import { Container, Header, Image, Grid } from 'semantic-ui-react'
import Scrollbar from 'react-scrollbars-custom'
import amir from 'assets/amir.jpg'

function HomePage() {
  return (
    <Container
      style={{ background: '#fff', boxShadow: '0 1px 2px #ccc', width: '80%' }}
    >
      <Scrollbar style={{ height: 'calc(100vh - 72.7031px)' }}>
        <Container text style={{ padding: '1em 0em' }}>
          <Image src={amir} bordered centered size='medium' />
          <Header as='h1' textAlign='center' style={{ marginBottom: '0' }}>
            Amir Sadovnik
          </Header>
          <Header as='h5' textAlign='center' style={{ marginTop: '0' }}>
            Assistant Professor
          </Header>

          <Grid>
            <Grid.Column width={8} textAlign='center'>
              <p>
                Min H. Kao Department of Electrical Engineering & Computer
                Science <br /> The University of Tennessee <br />
                Knoxville, TN 37996
              </p>
            </Grid.Column>
            <Grid.Column width={8} textAlign='center'>
              <p>
                <a href='mailto:asadovnik@utk.edu'>asadovnik@utk.edu</a> <br />{' '}
                <a href='tel:865-974-3076'>865-974-3076</a> <br /> 352 Min H.
                Kao Bldg.
              </p>
            </Grid.Column>
          </Grid>
        </Container>
      </Scrollbar>
    </Container>
  )
}

export default HomePage
