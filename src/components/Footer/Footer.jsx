import React from 'react'
import classes from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        ©2022 /{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100004282518671"
        >
          giorgi kuprashvili
        </a>
      </p>
    </footer>
  )
}

export default Footer
