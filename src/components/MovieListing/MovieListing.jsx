import React from 'react'
import { useSelector } from 'react-redux'
import { getAllmovies, getAllShows } from '../../features/movies/movieSlise'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
  const movies = useSelector(getAllmovies)
  const shows = useSelector(getAllShows)

  console.log(movies)
  let renderMovies,
    renderShows = ''

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />
      })
    ) : (
      <div>{movies.Error}</div>
    )

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />
      })
    ) : (
      <div>{shows.Error}</div>
    )

  return (
    <>
      <h1>movies</h1>
      <div>{renderMovies}</div>

      <h1>shows</h1>
      <div>{renderShows}</div>
    </>
  )
}

export default MovieListing
