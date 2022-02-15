import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
} from '../../features/movies/movieSlise'

const MovieDatail = () => {
  let { imdbID } = useParams()
  const id = imdbID.substring(1)
  const dispatch = useDispatch()
  let data = useSelector(getSelectedMovieOrShow)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(id))
    console.log(imdbID)
  }, [dispatch, id, imdbID])

  return (
    <div>
      <h1>{data.Title}</h1>
    </div>
  )
}

export default MovieDatail
