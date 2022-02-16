import classes from './SearchBar.module.scss'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  fetchAsyncmovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlise'
import banner from '../../assets/banner.jpg'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(fetchAsyncmovies(searchValue))
    dispatch(fetchAsyncShows(searchValue))
    setSearchValue('')
  }

  return (
    <div className={classes.searchContainer}>
      <div
        className={classes.banner}
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <form onSubmit={submitHandler}>
        <input
          required
          type="text"
          placeholder="ძიება..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">
          <FiSearch />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
