import React from 'react'
import style from './Card.module.css'

const Card = (props) => {
    const classProp = props.className

  return (
    <div className={`${style.card} ${classProp}`}>{props.children}</div>
  )
}

export default Card