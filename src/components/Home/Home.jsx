import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import {
  fetchAsyncmovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlise'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncmovies())
    dispatch(fetchAsyncShows())
  }, [dispatch])
  return (
    <div>
      movie list
      <MovieListing />
    </div>
  )
}

export default Home
