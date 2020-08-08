import React from 'react'
import { Item } from 'semantic-ui-react'

function Paper({ paper }) {
  let { author: meta, coauthors, pi } = paper
  if (coauthors.length) meta += `, ${coauthors}`
  meta += `, and ${pi}`

  return (
    <Item>
      <Item.Content>
        <Item.Header as='a' href={paper.link}>
          {paper.title}
        </Item.Header>
        <Item.Meta>{meta}</Item.Meta>
        <Item.Description>{paper.abstract}</Item.Description>
        <Item.Extra>{paper.citation}</Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default Paper
