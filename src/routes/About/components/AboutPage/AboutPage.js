import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'
import Scrollbar from 'react-scrollbars-custom'
import amirAndKids from 'assets/amir_and_kids.jpg'

function AboutPage() {
  return (
    <Container
      style={{ background: '#fff', boxShadow: '0 1px 2px #ccc', width: '80%' }}
    >
      <Scrollbar style={{ height: 'calc(100vh - 72.7031px)' }}>
        <Container text style={{ padding: '1em 0em' }}>
          <Header as='h1'>About Amir</Header>
          <Image src={amirAndKids} bordered />
          <Header as='h3'>Education and Teaching</Header>
          <p>
            I am an assistant professor in the department of Electrical
            Engineering and Computer Science at the University of Tennessee,
            Knoxville. Prior to that I was an assistant professor at Lafayette
            College. I received my PhD from the{' '}
            <a href='http://www.ece.cornell.edu/'>
              School of Electrical and Computer Engineering at Cornell
              University
            </a>
            . I was advised by{' '}
            <a href='http://www.ece.cornell.edu/peo-detail.cfm?NetID=tc345'>
              Prof. Tsuhan Chen
            </a>{' '}
            as member of the Advanced Multimedia Processing Lab. Prior to
            arriving at Cornell I received my Bachelors in Electrical and
            Computer Engineering from{' '}
            <a href='http://cooper.edu/'>The Cooper Union</a>.
          </p>
          <Header as='h3'>Research</Header>
          <p>
            My research in the field of Computer Vision has been mostly driven
            by the way humans understand and interact with images. This
            human-centered view has led me to work on new and exciting projects,
            which utilize tools from different fields (such as Computer Vision,
            Signal Processing, Natural Language Processing, Machine Learning,
            etc.) and apply them in new ways.
          </p>
          <Header as='h3'>Hobbies</Header>
          <p>
            In my spare time I enjoy hanging out with my family, playing guitar,
            hiking, and going to the movies.
          </p>
        </Container>
      </Scrollbar>
    </Container>
  )
}

export default AboutPage
