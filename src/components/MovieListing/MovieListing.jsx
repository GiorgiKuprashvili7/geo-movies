import React from 'react'
import classes from './MovieListing.module.scss'
import { useSelector } from 'react-redux'
import { getAllmovies, getAllShows } from '../../features/movies/movieSlise'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
  const movies = useSelector(getAllmovies)
  const shows = useSelector(getAllShows)

  let renderMovies,
    renderShows = ''

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />
      })
    ) : (
      <div className={classes.error}>
        <h3>{movies.Error}</h3>
      </div>
    )

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />
      })
    ) : (
      <div className={classes.error}>
        <h3>{shows.Error}</h3>
      </div>
    )

  return (
    <section className={classes.section}>
      <h1 className={classes.sectionTitle}>movies</h1>
      <div className={classes.listGrid}>{renderMovies}</div>

      <h1 className={classes.sectionTitle}>shows</h1>
      <div className={classes.listGrid}>{renderShows}</div>
    </section>
  )
}

export default MovieListing
