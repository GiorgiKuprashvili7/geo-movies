import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.scss'

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.contant}>
          <Link to="/">GeoMovie</Link>

          <div className={classes.userRegister}>user register</div>
        </div>
      </header>
      <div>
        <form>
          <input type="text" name="" id="" />
          <button type="submit">s</button>
        </form>
      </div>
    </>
  )
}

export default Header
