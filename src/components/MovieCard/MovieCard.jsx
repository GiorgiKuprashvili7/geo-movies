import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MovieCard.module.scss'

const MovieCard = ({ data }) => {
  return (
    <Link to={`movie/${data.imdbID}`} className={classes.cardLink}>
      <div className={classes.card}>
        <img src={data.Poster} alt="" />

        <div className={classes.textWrapper}>
          <h1>{data.Title}</h1>
          <p>
            <span>release date</span> {data.Year}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
