import classes from './MovieDatail.module.scss'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from '../../features/movies/movieSlise'

import { FaStar } from 'react-icons/fa'
import { AiFillLike, AiFillCalendar } from 'react-icons/ai'
import { MdOutlineLocalMovies } from 'react-icons/md'

const MovieDatail = () => {
  let { imdbID } = useParams()
  const dispatch = useDispatch()
  let data = useSelector(getSelectedMovieOrShow)

  useEffect(() => {
    window.scroll(0, 0)
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID])

  return (
    <section className={classes.movieDetails}>
      <div>
        {Object.keys(data).length === 0 ? (
          <div className={classes.loading}>
            <p>loading...</p>
          </div>
        ) : (
          <div className={classes.content}>
            <div className={classes.description}>
              <h1 className={classes.title}>{data.Title}</h1>

              <div className={classes.dataList}>
                <p>
                  imdb rating <FaStar className={classes.icon} />{' '}
                  <span>{data.imdbRating}</span>
                </p>
                <p>
                  imdb votes <AiFillLike className={classes.icon} />{' '}
                  <span>{data.imdbVotes}</span>
                </p>
                <p>
                  runtime <MdOutlineLocalMovies className={classes.icon} />{' '}
                  <span>{data.Runtime}</span>
                </p>
                <p>
                  year <AiFillCalendar className={classes.icon} />{' '}
                  <span>{data.Year}</span>
                </p>
              </div>

              <p className={classes.plot}>{data.Plot}</p>

              <div className={classes.dataListTwo}>
                <p>
                  <span>director</span>
                  {data.Director}
                </p>
                <p>
                  <span>actors</span>
                  {data.Actors}
                </p>
                <p>
                  <span>genres</span>
                  {data.Genre}
                </p>
                <p>
                  <span>languages</span>
                  {data.Language}
                </p>
                <p>
                  <span>awards</span>
                  {data.Awards}
                </p>
              </div>
            </div>
            <div className={classes.image}>
              <img src={data.Poster} alt={data.title} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MovieDatail
