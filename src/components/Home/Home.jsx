import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import {
  fetchAsyncmovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlise'
import SearchBar from '../SearchBar/SearchBar'

const Home = () => {
  const dispatch = useDispatch()
  const movieText = 'harry'
  const showText = 'friends'

  useEffect(() => {
    dispatch(fetchAsyncmovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])
  return (
    <>
      <SearchBar />
      <MovieListing />
    </>
  )
}

export default Home
