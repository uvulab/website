import React from 'react'
import { Item } from 'semantic-ui-react'

function Class({ cls }) {
  let { id, title, semesters, links } = cls
  return (
    <Item>
      <Item.Content>
        <Item.Header>{id}</Item.Header>
        <Item.Description>{title}</Item.Description>
        <Item.Extra>{linkify(semesters, links)}</Item.Extra>
      </Item.Content>
    </Item>
  )
}

function linkify(semesters, links) {
  links = semesters.map((semester, i) => (
    <a href={links[i]} key={semester}>
      {semester}
    </a>
  ))
  for (let i = 1; i < links.length; i += 2)
    links.splice(
      i,
      0,
      <a style={{ cursor: 'text', color: 'rgba(0,0,0,.87)' }} key={i}>
        -
      </a>
    )
  return links
}

export default Class
