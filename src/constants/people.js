import React, { Fragment } from 'react'
import AmirPhoto from 'assets/amir_profile.jpg'
import FabianPhoto from 'assets/fabian_profile.jpg'
import HenryPhoto from 'assets/henry_profile.jpg'
import JamesPhoto from 'assets/james_profile.jpg'
import JerryPhoto from 'assets/jerry.jpg'
import NataliePhoto from 'assets/natalie.jpg'
import SaiPhoto from 'assets/sai.jpg'

const people = [
  {
    type: 'Professor',
    img: AmirPhoto,
    name: 'Amir Sadovnik',
    meta: 'Assistant Professor',
    description: (
      <Fragment>
        Min H. Kao Department of Electrical Engineering & Computer Science
        <br />
        The University of Tennessee Knoxville, TN 37996
      </Fragment>
    ),
    extra: (
      <Fragment>
        <a href='mailto:asadovnik@utk.edu'>asadovnik@utk.edu</a>{' '}
        <a href='tel:865-974-3076'>865-974-3076</a>
        <br />
        352 Min H. Kao Bldg
      </Fragment>
    )
  },
  {
    type: 'PhD',
    img: JerryPhoto,
    name: 'Jerry Duncan',
    meta: (
      <Fragment>
        2<sup>nd</sup> Year PhD Student
      </Fragment>
    ),
    description: (
      <Fragment>
        Min H. Kao Department of Electrical Engineering & Computer Science
        <br />
        The University of Tennessee Knoxville, TN 37996
      </Fragment>
    ),
    extra: (
      <Fragment>
        <a href='mailto:jdunca51@utk.edu'>jdunca51@utk.edu</a>{' '}
      </Fragment>
    )
  },
  {
    type: 'PhD',
    img: FabianPhoto,
    name: 'Fabian Fallas',
    meta: (
      <Fragment>
        2<sup>nd</sup> Year PhD Student
      </Fragment>
    ),
    description: (
      <Fragment>
        Min H. Kao Department of Electrical Engineering & Computer Science
        <br />
        The University of Tennessee Knoxville, TN 37996
      </Fragment>
    ),
    extra: (
      <Fragment>
        <a href='mailto:ffallasm@vols.utk.edu'>ffallasm@vols.utk.edu</a>{' '}
      </Fragment>
    )
  },
  {
    type: 'PhD',
    img: JamesPhoto,
    name: 'James Senter',
    meta: (
      <Fragment>
        3<sup>rd</sup> Year PhD Student
      </Fragment>
    ),
    description: (
      <Fragment>
        Min H. Kao Department of Electrical Engineering & Computer Science
        <br />
        The University of Tennessee Knoxville, TN 37996
      </Fragment>
    ),
    extra: (
      <Fragment>
        <a href='mailto:jsenter3@vols.utk.edu'>jsenter3@vols.utk.edu</a>{' '}
      </Fragment>
    )
  },
  {
    type: 'PhD',
    img: undefined,
    name: 'Taher Naderi',
    meta: (
      <Fragment>
        4<sup>th</sup> Year PhD Student
      </Fragment>
    ),
    description: (
      <Fragment>
        Min H. Kao Department of Electrical Engineering & Computer Science
        <br />
        The University of Tennessee Knoxville, TN 37996
      </Fragment>
    ),
    extra: (
      <Fragment>
        <a href='mailto:tnaderi@vols.utk.edu'>tnaderi@vols.utk.edu</a>{' '}
      </Fragment>
    )
  },
  {
    type: 'Undergraduate',
    img: HenryPhoto,
    name: 'Henry Eigen',
    meta: <Fragment>Junior</Fragment>,
    description: (
      <Fragment>
        Min H. Kao Department of Electrical Engineering & Computer Science
        <br />
        The University of Tennessee Knoxville, TN 37996
      </Fragment>
    ),
    extra: (
      <Fragment>
        <a href='mailto:heigen@vols.utk.edu'>heigen@vols.utk.edu</a>{' '}
      </Fragment>
    )
  },
  {
    type: 'Undergraduate',
    img: SaiPhoto,
    name: 'Sai Thatigotla',
    meta: <Fragment>Junior</Fragment>,
    description: (
      <Fragment>
        Min H. Kao Department of Electrical Engineering & Computer Science
        <br />
        The University of Tennessee Knoxville, TN 37996
      </Fragment>
    ),
    extra: (
      <Fragment>
        <a href='mailto:sthatigo@vols.utk.edu'>sthatigo@vols.utk.edu</a>{' '}
      </Fragment>
    )
  },
  {
    type: 'Graduated',
    img: NataliePhoto,
    name: 'Natalie Bogda',
    meta: <Fragment>Master's Degree</Fragment>,
    description: undefined,
    extra: undefined
  }
]

const professor = people.filter(person => person.type === 'Professor')
const phds = people.filter(person => person.type === 'PhD')
const masters = people.filter(person => person.type === 'Masters')
const undergrads = people.filter(person => person.type === 'Undergraduate')
const graduated = people.filter(person => person.type === 'Graduated')

export const allPeople = [
  { data: professor, label: 'Professor', cols: 1 },
  { data: phds, label: 'PhD Students', cols: 4 },
  { data: masters, label: "Master's Students", cols: 0 },
  { data: undergrads, label: 'Undergraduates', cols: 2 },
  { data: graduated, label: 'Graduated', cols: 1 }
].filter(({ data }) => data.length)
