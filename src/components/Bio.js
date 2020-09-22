import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        Tech blog by{' '}
        <a href="https://www.linkedin.com/in/zacharywnorton/">Zack Norton</a>.
        <br />
        Built using{' '}
        <a href="https://github.com/jamesknelson/create-react-blog">create-react-blog</a>
        <br />
        Coding and hacking.
      </p>
    </div>
  )
}

export default Bio
