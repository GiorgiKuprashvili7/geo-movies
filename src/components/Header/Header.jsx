import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.scss'
import { MdLocalMovies } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.contant}>
        <Link to="/" className={classes.logoLink}>
          <MdLocalMovies className={classes.logo} /> <span>GeoMovie</span>
        </Link>

        <div className={classes.register} onClick={() => alert('register')}>
          <span>Log in</span>
          <div className={classes.userRegister}>
            <FaUser />
          </div>
          <div className={classes.login}>
            <div>
              <p>log in</p>
              <p>sign up</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
