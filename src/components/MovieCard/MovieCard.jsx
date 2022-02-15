import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ data }) => {
  return (
    <Link to={`movie/:${data.imdbID}`}>
      <div>
        <img src={data.Poster} alt="" />
        <h2>{data.Title}</h2>
      </div>
    </Link>
  )
}

export default MovieCard
